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

// CREATE notifications path must still exist. it can be an automated process but it must still exist within the database. the user causes this to happen unwittingly.

// notifications should be saved in the backend. BUT temporary banners are front end only. real notifications are saved in backend.
/*
    to streamline. user posts comment. There must be a conditional statement on act of the user that declares the id of the acting user and the id of the receiving user and the action executed.

    you can add a prop to a user model or a status code to create this conditional, or an http request.

    LONG way is hard coding each controller of relevance to have a conditional json return statement.

    *** MIDDLEWARE for different kinds of notifications. --> rather than its own, we put a 'add notification' middleware to the routes themselves . post, comment, like, etc. streamline the process in this manner.

    loggedin user. access to current logged in user.  Needs access to other person. This is acquired FROM that route.

    req.user._id , action -->long chain of if/else statements for behavior types.   , user 2._id --> the post id is connected to a user. you access the post you access the user. query to find user by post id. post.user name.user   you get it from the .user . .

    create a DIFFERENT middleware file for each specific set of routes. "middle ware is always very specific because they get slapped onto very specific routes. the middleware must in turn be small in scope."

    {  User 1 , action , user  2 }

*/


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
