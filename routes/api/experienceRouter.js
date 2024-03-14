const express = require('express');
const router = express.Router();
const { apiController } = require('../../controllers/api/userController');
const experienceController = require('../../controllers/api/experienceController')



//create
router.post('/', apiController.auth, experienceController.createExperience);
//get
router.get('/:userId', apiController.auth, experienceController.getExperiencesByUserId);
//update
router.put('/:id', apiController.auth, experienceController.updateExperience);
//delete
router.delete('/:id', apiController.auth, experienceController.deleteExperience);

module.exports = router;
