const Category = require('../models/Category');

const CategoryController = {};

CategoryController.getCategories = async (req, res) => {
	try {
		const categories = await Category.find();

		if (categories) {
			res.status(200).send(categories);
		} else {
			res.status(404).json({ error: 'Categories not found.' });
		}
	} catch (error) {
		// Internal Server Error
		res.status(500).json({ message: error.message });
	}
};

CategoryController.createCategory = async (req, res) => {
	const newCategory = new Category(req.body);

	try {
		await newCategory.save();
		// Created successfully
		res.status(201).send({ message: 'New category added!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

CategoryController.updateCategory = async (req, res) => {
	const categoryName = req.body;
	try {
		await Category.findOneAndUpdate({ _id: req.params.id }, { categoryName });
		res.status(200).send({ message: 'Category updated successfully!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

CategoryController.deleteCategory = async (req, res) => {
	try {
		await Category.findOneAndDelete({ _id: req.params.id });
		res.status(200).send({ message: 'Successfully deleted category!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = CategoryController;
