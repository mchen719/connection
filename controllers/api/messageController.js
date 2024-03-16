// I have suspicions that this could potentially be more complicated than this due to the websocket functionality. Must examine.

const Message = require('../../models/message')

module.exports = {
    getMessages,
    getUserMessages,
    sendMessage,
    jsonUserMessages,
    jsonMessages,
    jsonMessage
    // editMessage
}

app.use('/api/messages', require('./routes/api/messageRouter'))
// http://localhost:8000/api/messages

app.use('/api/notifications', require('./routes/api/notificationRouter'))

function jsonUserMessages (_, res) {
    res.json(res.locals.data.userMessages)
}

function jsonMessages (_, res) {
    res.json(res.locals.data.messages)
}

function jsonMessage (_, res) {
    res.json(res.locals.data.message)
}

async function getMessages(_, res, next) {
    try {
        const messages = await Message.find({}).sort('updated_at')
        res.locals.data.messages = messages
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function getUserMessages(req, res, next) {
    try {
        const messages = await Message.find({user: req.params.id })
        res.locals.data.messages = messages
        next()
    } catch (error) {

    }
}

async function sendMessage(req, res) {
    try {
        req.body.user = req.user._id
        const message = await Message.create(req.body)
        req.user.messages.addToSet(message)
        req.user.save()
        res.locals.data.message = message

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
