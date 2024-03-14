const express = require('express');
const skillController = require('../../controllers/api/skillController');
const router = express.Router();

// Define your routes here
router.get('/', skillController.getAllSkills);
router.post('/', skillController.createSkill);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);

module.exports = router;