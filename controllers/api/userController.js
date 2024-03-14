// /controllers/api/users.js

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      console.log(user)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      console.log(e)
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  },
  async update (req, res, next) {
    try {
        const updates = Object.keys(req.body)
        const user = await User.findOne({ _id: req.params.id})
        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        res.json(user)
        console.log(user)
        next()
    } catch {
        res.status(400).json('Bad Credentials')
    }
  },
async delete (req, res) {
    try {
        const user = await User.findOne({ _id: req.params.id})
        user.deleteOne()
        res.json([{ msg: 'user deleted' }, user])
        console.log(`${user.name} has been deleted`)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
  
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
