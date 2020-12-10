const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error('Invalid email address.');
				}
			},
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
			validate(value) {
				if (!validator.isStrongPassword(value)) {
					throw new Error(
						'Password should contain an uppercase letter and a symbol.'
					);
				}
			},
		},
		profilePhoto: String,
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		tokens: [
			{
				token: {
					type: String,
					require: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

// Mongoose Static Function
userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (user) {
		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) {
			return user;
		} else {
			throw new Error('Unable to login.');
		}
	} else {
		throw new Error({ error: 'Unable to login.' });
	}
};

// Instance Method for password encryption
userSchema.methods.encryptPassword = async (password) => {
	return await bcrypt.hash(password, 8);
};

// Instance Method to generate an auth token
userSchema.methods.generateAuthToken = async function () {
	const user = this;

	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

	user.tokens = user.tokens.concat({ token });

	try {
		await user.save();
	} catch (error) {
		throw new Error(error);
	}

	return token;
};

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	return userObject.tokens;
};

const User = model('User', userSchema);

module.exports = User;
