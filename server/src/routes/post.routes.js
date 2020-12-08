const router = require('express').Router();
const {
	getPosts,
	getPostBySlug,
	createPost,
	updatePost,
	deletePost,
} = require('../controllers/post.controller');
const { auth } = require('../middleware/auth');

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);

// Authenticated User
router.post('/create', auth, createPost);
router.put('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);

module.exports = router;
