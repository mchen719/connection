const express = require('express');
const router = express.Router();
const educationCtrl = require('../../controllers/api/educationController');
const { apiController } = require('../../controllers/api/userController');

// POST /api/education
router.post('/', educationCtrl.createEdu);

// PUT /api/education/:id
router.put(':id', apiController.auth, educationCtrl.updateEdu);

// GET /api/education/:id
router.get('/:id', educationCtrl.showEdu);

// DELETE /api/education/:id
router.get('/:id', apiController.auth, educationCtrl.deleteEdu);

module.exports = router;
