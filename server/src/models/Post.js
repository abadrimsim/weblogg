const { Schema, model } = require('mongoose');
const slugify = require('slugify');

const postSchema = new Schema(
	{
		image: String,
		category: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		body: Object,
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		likes: {
			type: Number,
			default: 0,
		},
		comments: [
			{
				name: String,
				message: String,
			},
		],
	},
	{
		timestamps: true,
	}
);

postSchema.pre('validate', function (next) {
	const post = this;

	if (post.title) {
		post.slug = slugify(post.title, { lower: true, strict: true });
	}

	next();
});

const Post = model('Post', postSchema);

module.exports = Post;
