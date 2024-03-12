const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name:
  {
    type: String,
    required: true
  },
  endorsements: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},
{
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
