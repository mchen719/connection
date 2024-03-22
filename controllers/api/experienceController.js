// import model
const Experience = require('../../models/experience');

const createExperience = async (req, res) => {
  try {
    const { title, company, location, startDate, endDate, description } = req.body;
    
    // Create a new experience 
    const newExperience = new Experience({
      title,
      company,
      location,
      startDate,
      endDate,
      description,
      userId: req.user._id
    });
    // needs to connect to user with token authentication

    // Save the new experience to the database
    await newExperience.save();
    req.user.experience.addToSet(newExperience)
    await req.user.save()

    res.status(200).json({ newExperience, user: req.user });
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
      console.log(req.params.id, req.user._id, req.body)
      const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new:true })
      console.log(experience)
      res.status(200).json(experience)
      next()
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

//delete an existing experience
const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete({_id : req.params.id, user: req.user._id})
    res.status(200).json(experience)
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