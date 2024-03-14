const express = require('express');
const router = express.Router();
const notificationCtrl = require('../../controllers/api/notificationController');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const { checkToken, dataController, apiController } = require('../../controllers/api/userController')



// GET /api/notifications/
router.get('/', ensureLoggedIn, notificationCtrl.getNotifications, notificationCtrl.jsonNotifications);
// GET /api/notifications/:id   (a specific notification route if needed)
router.get('/:id', ensureLoggedIn, notificationCtrl.getNotification, notificationCtrl.jsonNotification);
// DELETE /api/notifications/:id
router.delete('/:id', ensureLoggedIn, notificationCtrl.destroyNotification, notificationCtrl.jsonNotification);
// PUT /api/notifications/:id   (mark notification as read if needed)
router.put('/:id', ensureLoggedIn, notificationCtrl.readNotification, notificationCtrl.jsonNotification);

module.exports = router;
