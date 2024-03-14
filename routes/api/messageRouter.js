const express = require('express');
const router = express.Router();
const messageCtrl = require('../../controllers/api/messageController');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const { checkToken, dataController, apiController } = require('../../controllers/api/userController')
const messageController = require('../../controllers/api/messageController')

// MAJOR issue, must confirm whether the user ID in the route has to be the LOGGED IN user or the RECEIVING user

// GET /api/messages/
router.get('/', ensureLoggedIn, messageController.getMessages, messageController.jsonMessages);
// GET /api/messages/:userId
router.get('/:userId', ensureLoggedIn, messageCtrl.getUserMessages, messageController.jsonUserMessages);
// POST /api/messages/:userId
router.post('/:userId', ensureLoggedIn, messageCtrl.sendMessage, messageController.jsonMessage);
// // PUT /api/messages/:userId
// router.put('/:userId', ensureLoggedIn, messageCtrl.editMessage, json.getUserMessage, messageController.jsonMessage);

module.exports = router;
