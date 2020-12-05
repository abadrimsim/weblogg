const router = require('express').Router();
const {
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory,
} = require('../controllers/category.controller');

router.get('/category', getCategories);

// Admin User
router.post('/new/category', createCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;
