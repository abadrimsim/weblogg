const Post = require('../models/Post');

const PostController = {};

PostController.getPosts = async (req, res) => {
	try {
		const posts = await Post.find();

		if (posts) {
			res.status(200).send(posts);
		} else {
			res.status(404).json({ error: 'Posts not found.' });
		}
	} catch (error) {
		// Internal Server Error
		res.status(500).json({ message: error.message });
	}
};

PostController.getPostBySlug = async (req, res) => {
	try {
		const post = await Post.findOne({ slug: req.params.slug });
		res.status(200).send(post);
	} catch (error) {
		res.status(404).json({ error: 'Post not found.' });
	}
};

PostController.createPost = async (req, res) => {
	const newPost = new Post(req.body);

	try {
		await newPost.save();
		// Created successfully
		res.status(201).send({ message: 'New post added!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

PostController.updatePost = async (req, res) => {
	const { image, category, title, body } = req.body;
	try {
		await Post.findOneAndUpdate(
			{ _id: req.params.id },
			{ image, category, title, body }
		);
		res.status(200).send({ message: 'Post updated successfully!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

PostController.deletePost = async (req, res) => {
	try {
		await Post.findOneAndDelete({ _id: req.params.id });
		res.status(200).send({ message: 'Successfully deleted post!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = PostController;
