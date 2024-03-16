// our current post model isn't pointing toward a specific user's posts or a specific receiver's array. could be problematic. must investigate further .

// seed file takes care of above with senderId and receiverId. must discuss with group before finalizing inclusion thereof below

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
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
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
