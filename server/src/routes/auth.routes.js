const router = require('express').Router();
const { loginUser, registerUser } = require('../controllers/auth.controller');

router.post('/login', loginUser);
router.post('/signup', registerUser);

module.exports = router;
