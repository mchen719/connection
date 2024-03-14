const express = require('express');
const postController = require('../../controllers/api/post');

const router = express.Router();

// GET /api/posts
router.get('/', postController.getPosts);

// GET /api/posts/:id
router.get('/:id', postController.getPostById);

// POST /api/posts
router.post('/', postController.createPost);

// PUT /api/posts/:id
router.put('/:id', postController.updatePost);

// DELETE /api/posts/:id
router.delete('/:id', postController.deletePost);

module.exports = router;