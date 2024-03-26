const router = require('express').Router();
const postCtrl = require('../../controllers/api/postController');
const checkToken = require('../../config/checkToken');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/posts
router.post(
	'/',
	checkToken,
	ensureLoggedIn,
	postCtrl.createPost,
	postCtrl.respondWithPost
); // Create

// PUT /api/posts/:id
router.put(
	'/:id',
	checkToken,
	ensureLoggedIn,
	postCtrl.updatePost,
	postCtrl.respondWithPost
); // Update

// DELETE /api/posts/:id
router.delete(
	'/:id',
	checkToken,
	ensureLoggedIn,
	postCtrl.destroyPost,
	postCtrl.respondWithPost
); // DELETE/DESTROY

router.get('/', checkToken, ensureLoggedIn, postCtrl.showAllPosts);
module.exports = router;
