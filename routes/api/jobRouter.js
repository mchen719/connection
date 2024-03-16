const express = require('express');
const router = express.Router();
const jobController = require('../../controllers/api/jobController');

// Create a new job posting
router.post('/', jobController.createJob);

// Get all job postings
router.get('/', jobController.getJobs);

// Update a job posting
router.put('/:jobId', jobController.updateJob);

// Delete a job posting
router.delete('/:jobId', jobController.deleteJob);

module.exports = router;
