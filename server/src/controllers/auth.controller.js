const User = require('../models/User');

const authController = {};

// Register User Endpoint
authController.registerUser = async (req, res) => {
	const newUser = new User(req.body);

	try {
		newUser.password = await newUser.encryptPassword(newUser.password);
		await newUser.save();
		res.status(201).send({ created: true });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// LOgin User Endpoint
authController.loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findByCredentials(email, password);
		const token = await User.generateAuthToken();
		res.status(200).send({ token });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = authController;
