const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token
    let user 

    if (token) {
        token = token.replace('Bearer ', '')

        jwt.verify(token, process.env.SECRET, async function(err, decoded) {
            user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            if(user) {
                req.user = await User.findOne({ _id: user._id }).populate('experience education skills posts')
            }
            next()
            return
        })
    } else {
        req.user = null
        return next()
    }
}