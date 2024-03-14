// import model
const Experience = require('../../models/experience');

const createExperience = async (req, res) => {
  try {
    const { userId, title, company, location, startDate, endDate, description } = req.body;
    
    // Create a new experience 
    const newExperience = new Experience({
      userId,
      title,
      company,
      location,
      startDate,
      endDate,
      description
    });

    // Save the new experience to the database
    const savedExperience = await newExperience.save();

    res.status(200).json(savedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get all experiences for a user
const getExperiencesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    
    // Find all experiences for the specified user
    const experiences = await Experience.find({ userId });

    res.status(200).json(experiences);
    next()
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update an existing experience
const updateExperience = async (req, res, next) => {
    try {
      const experienceId = req.params.id;
      const updates = req.body;
  
      // Find the experience by ID
      const experience = await Experience.findById(experienceId);
  
      // Update the experience fields based on the request body
      Object.keys(updates).forEach(update => {
        experience[update] = updates[update];
      });
  
      // Save the updated experience
      await experience.save();
  
      res.status(200).json(experience);
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

//delete an existing experience
const deleteExperience = async (req, res, next) => {
  try {
    const experienceId = req.params.id;
    
    // Delete the experience with the provided id
    await Experience.findByIdAndDelete(experienceId);

    res.status(200).send();
    next()
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createExperience,
  getExperiencesByUserId,   
  updateExperience,
  deleteExperience
}