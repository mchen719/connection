const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  school: {
    type: String,
    required: true
  },
  degree: String,
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
