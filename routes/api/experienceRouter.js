// Import required modules
const express = require('express');
const router = express.Router();

// Import the experience controller
const experienceController = require('../../controllers/api/experienceController');

// Define routes for handling experiences

//create
router.post('/experience', experienceController.createExperience);
//get
router.get('/experience/:userId', experienceController.getExperiencesByUserId);
//update
router.put('/experience/:id', experienceController.updateExperience);
//delete
router.delete('/experience/:id', experienceController.deleteExperience);

module.exports = router;

