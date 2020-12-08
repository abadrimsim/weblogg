const User = require('../models/User');

const userController = {};

userController.userLogout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter(
			(token) => token.token !== req.token
		);
		await req.user.save();

		res.status(200).send();
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = userController;
