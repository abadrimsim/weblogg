const router = require('express').Router();
const {
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory,
} = require('../controllers/category.controller');
const { auth, admin } = require('../middleware/auth');

router.get('/', getCategories);

// Admin User
router.post('/create', auth, admin, createCategory);
router.put('/update/:id', auth, admin, updateCategory);
router.delete('/delete/:id', auth, admin, deleteCategory);

module.exports = router;
