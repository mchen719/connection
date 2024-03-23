const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  profilePicture: String,
  coverPhoto: String,
  summary: String,

  experience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience'}],
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education'}],
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}],
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification'}],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  //friends 
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},
{
    timestamps: true
}
);

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})


const User = mongoose.model('User', userSchema);

module.exports = User;
