const Post = require('../../models/post');
const User = require('../../models/user');

// CREATE
const createPost = async (req, res, next) => {
	try {
		const createdPost = await Post.create(req.body);
		const user = await User.findById({ _id: req.user._id });
		user.posts.addToSet(createdPost);
		await user.save();
		console.log(user);
		res.locals.data.post = createdPost;
		next();
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

const destroyPost = async (req, res, next) => {
	try {
		const deletedPost = await Post.findByIdAndDelete(req.params.id);
		res.locals.data.post = deletedPost;
		next();
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

const updatePost = async (req, res, next) => {
	try {
		const updatedPost = await Post.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.locals.data.post = updatedPost;
		next();
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

const respondWithPost = (req, res) => {
	res.json(res.locals.data.post);
};

async function showAllPosts(req, res) {
	try {
		const showAllPosts = await Post.find().populate('createdBy');
		res.json(showAllPosts);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

module.exports = {
	createPost,
	destroyPost,
	updatePost,
	respondWithPost,
	showAllPosts
};
