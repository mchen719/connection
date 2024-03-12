const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
