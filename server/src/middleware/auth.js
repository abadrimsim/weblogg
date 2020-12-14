const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Authentication
const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization').replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(decoded.id).select('-password');

		next();
	} catch (error) {
		res.status(401).send({ error: 'Unauthorized. Token failed.' });
	}
};

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401).send({ error: 'Not authorized as an admin.' });
	}
};

module.exports = { auth, admin };
