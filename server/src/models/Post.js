const { Schema, model } = require('mongoose');
const slugify = require('slugify');
const defaultImage =
	'https://www.technipages.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';

const commentSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

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
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Author',
		},
		content: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		likes: {
			type: Number,
			default: 0,
		},
		comments: [commentSchema],
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
