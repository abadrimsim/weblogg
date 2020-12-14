const generateToken = require('../utils/generateToken');
const User = require('../models/User');

// Register User Endpoint
const registerUser = async (req, res) => {
	const { fullName, email, password } = req.body;

	try {
		const userExists = await User.findOne({ email });

		if (userExists) {
			res.status(400);
			throw new Error('User already exists!');
		}

		const newUser = await User.create({
			fullName,
			email,
			password,
		});

		if (newUser) {
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
				isAdmin: newUser.isAdmin,
				token: generateToken(newUser._id),
			});
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Login User Endpoint
const authUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (user && (await user.matchPassword(password))) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id),
			});
		}

		res.status(200).send(user);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { registerUser, authUser };
