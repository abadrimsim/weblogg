const Post = require('../models/Post');

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();

		if (posts) {
			res.status(200).send(posts);
		} else {
			res.status(404).json({ error: 'Posts not found.' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getPostBySlug = async (req, res) => {
	const postSlug = req.params.slug;

	try {
		const post = await Post.findOne({ slug: postSlug });
		res.status(200).send(post);
	} catch (error) {
		res.status(404).json({ error: 'Post not found.' });
	}
};

const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new Post({ post, author: req.user.fullName });

	try {
		await newPost.save();
		res.status(201).send({ message: 'New post added!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updatePost = async (req, res) => {
	const id = req.params.id;
	const post = req.body;

	try {
		await Post.findByIdAndUpdate(id, post);
		res.status(200).send({ message: 'Post updated successfully!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deletePost = async (req, res) => {
	const id = req.params.id;

	try {
		await Post.findByIdAndDelete(id);
		res.status(200).send({ message: 'Successfully deleted post!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createComment = async (req, res) => {
	const userComment = req.body;

	try {
		const post = await Post.findById(req.params.id);

		if (post) {
			const comment = {
				fullName: req.user.fullName,
				userComment,
				user: req.user.id,
			};

			post.comments.push(comment);
			await post.save();
			res.status(201).json({ message: 'Comment added' });
		}
	} catch (error) {
		res.status(404).json({ error: 'Post not found.' });
	}
};

module.exports = {
	getPosts,
	getPostBySlug,
	createPost,
	updatePost,
	deletePost,
	createComment,
};
