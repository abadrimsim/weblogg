const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Authentication
const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization').replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findOne({
			_id: decoded._id,
			'tokens.token': token,
		});

		if (!user) {
			throw new Error();
		}

		req.token = token;
		req.user = user;
		next();
	} catch (error) {
		res.status(401).send({ error: 'Unauthorized. Please authenticate.' });
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
