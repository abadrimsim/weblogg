const router = require('express').Router();
const { authUser, registerUser } = require('../controllers/user.controller');
const { auth } = require('../middleware/auth');

router.post('/login', authUser);
router.post('/register', registerUser);

module.exports = router;
