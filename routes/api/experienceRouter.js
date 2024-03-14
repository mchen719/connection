const express = require('express');
const router = express.Router();
const experienceController = require('../../controllers/api/experienceController');
const { ensureLoggedIn } = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, experienceController.createExperience);
router.get('/:userId', ensureLoggedIn, experienceController.getExperiencesByUserId);
router.put('/:id', ensureLoggedIn, experienceController.updateExperience);
router.delete('/:id', ensureLoggedIn, experienceController.deleteExperience);

module.exports = router;
