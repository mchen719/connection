const express = require('express');
const router = express.Router();
const educationCtrl = require('../../controllers/api/educationController');
const userCtrl = require('../controllers/api/userController');

// POST /api/users
router.post('/', userCtrl.auth, educationCtrl.createEdu);

// PUT /api/education/:id
router.put(':id', userCtrl, educationCtrl.updateEdu);

// GET /api/education/:id
router.get('/:id', educationCtrl.showEdu);

// DELETE /api/education/:id
router.get('/:id', userCtrl.auth, educationCtrl.deleteEdu);

module.exports = router;
