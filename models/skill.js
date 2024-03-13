const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  endorsements: {
    type: Number,
    default: 0
  }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;

