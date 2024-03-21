const Job = require('../../models/job');

const createJob = async (req, res) => {
    try {
      const { title, company, location, description, requirements } = req.body;

      const newJob = await Job ({
        title,
        company,
        location,
        description,
        requirements 
      });

      const savedJob = await newJob.save();

      res.status(200).json(savedJob);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //get jobs 
 const getJobs = async (req, res) => {
    try {
      const jobs = await Job.find().populate('createdBy'); // Populate postedBy field with user's name
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //update
  const updateJob = async (req, res, next) => {
    try {
      const jobId = req.params.jobId;
      const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, { new: true });
      res.json(updatedJob)
      next()
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //delete 
 const deleteJob = async (req, res, next) => {
    try {
      const jobId = req.params.jobId;
      await Job.findByIdAndDelete(jobId);
      res.json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

module.exports = {
    createJob,
    getJobs,
    updateJob,
    deleteJob
}
