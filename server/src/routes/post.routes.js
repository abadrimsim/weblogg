const router = require('express').Router();
const {
	getPosts,
	getPostBySlug,
	createPost,
	updatePost,
	deletePost,
} = require('../controllers/post.controller');

router.get('/posts', getPosts);
router.get('/posts/:slug', getPostBySlug);

// Authenticated User
router.post('/new/post', createPost);
router.put('/update/post/:id', updatePost);
router.delete('/delete/post/:id', deletePost);

module.exports = router;
