const Notification = require('../../models/notification');

module.exports = {
    getNotifications,
    getNotification,
    destroyNotification,
    readNotification,
    jsonNotification,
    jsonNotifications
};

function jsonNotification (_, res) {
    res.json(res.locals.data.notification)
}

function jsonNotifications (_, res) {
    res.json(res.locals.data.notifications)
}


// below: potentially replace _ with req.
async function getNotifications(_, res, next) {
    try {
        // must confirm that below is how to sort by timestamps of notification.
        const notifications = await Notification.find({}).sort('updated_at')
        res.locals.data.notifications = notifications
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function getNotification(req, res) {
    try {
        const notification = await Notification.findById(req.params.id)
        res.locals.data.notification = notification
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function destroyNotification(req, res, next) {
    try {
        const notification = await Notification.findOneAndDelete({_id: req.params.id, user: req.user._id })
        req.user.notifications.pull(notification)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// sets a notification in database to update as 'read' or 'unread', per click timing
async function readNotification(req, res, next) {
    try {
        const notification = await Notification.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.read, { new: true })
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
