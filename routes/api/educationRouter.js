const express = require('express');
const router = express.Router();
const educationCtrl = require('../../controllers/api/educationController');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/education
router.post('/', ensureLoggedIn, educationCtrl.createEdu);

// PUT /api/education/:id
router.put(':id', ensureLoggedIn, educationCtrl.updateEdu);

// GET /api/education/:id
router.get('/:id', educationCtrl.showEdu);

// DELETE /api/education/:id
router.get('/:id', ensureLoggedIn, educationCtrl.deleteEdu);

module.exports = router;
