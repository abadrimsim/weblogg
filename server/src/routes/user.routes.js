const router = require('express').Router();
const { userLogout } = require('../controllers/user.controller');
const { auth } = require('../middleware/auth');

router.post('/logout', auth, userLogout);

module.exports = router;
