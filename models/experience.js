const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const experienceSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
    company: {
        type: String,
        required: true
    },
    location: String,
    startDate: {
        type: Date,
        required: true
    },
    endDate: Date,
    description: String
},
{
    timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
