// Import required modules
const express = require('express');
const router = express.Router();

// Import the experience controller
const experienceController = require('../../controllers/api/experienceController');

// Define routes for handling experiences

//create
router.post('/', experienceController.createExperience);
//get
router.get('/:userId', experienceController.getExperiencesByUserId);
//update
router.put('/:id', experienceController.updateExperience);
//delete
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;

