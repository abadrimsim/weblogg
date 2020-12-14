const Category = require('../models/Category');

const getCategories = async (req, res) => {
	try {
		const categories = await Category.find();

		if (categories) {
			res.status(200).send(categories);
		} else {
			res.status(404).json({ error: 'Categories not found.' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createCategory = async (req, res) => {
	const category = req.body;
	const newCategory = new Category(category);

	try {
		await newCategory.save();
		res.status(201).send({ message: 'New category added!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateCategory = async (req, res) => {
	const id = req.params.id;
	const category = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send('No category with that id.');

	try {
		await Category.findByIdAndUpdate(id, category);
		res.status(200).send({ message: 'Category updated successfully!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteCategory = async (req, res) => {
	const id = req.params.id;

	try {
		await Category.findByIdAndDelete(id);
		res.status(200).send({ message: 'Successfully deleted category!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory,
};
