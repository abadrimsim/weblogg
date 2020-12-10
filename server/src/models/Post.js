const { Schema, model } = require('mongoose');
const slugify = require('slugify');
const defaultImage =
	'https://www.technipages.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';

const postSchema = new Schema(
	{
		image: {
			type: String,
			default: defaultImage,
		},
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

// Serial middleware
postSchema.pre('validate', function (next) {
	const post = this;

	if (post.title) {
		post.slug = slugify(post.title, { lower: true, strict: true });
	}

	next();
});

const Post = model('Post', postSchema);

module.exports = Post;
