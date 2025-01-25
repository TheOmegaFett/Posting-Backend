const Category = require("../models/category");

async function getCategories() {
  const categories = await Category.find();
  return categories;
}

async function getCategoryById(id) {
  const category = await Category.findById(id);
  return category;
}

async function createCategory(category) {
  const newCategory = await Category.create(category);
  return newCategory;
}

/**
 * Updates a category in the database.
 * @param {string} categoryId - The ID of the category to update.
 * @param {object} category - The updated category data.
 * @returns {Promise<object>} The updated category object.
 */
async function updateCategory(categoryId, category) {
  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    category,
    { new: true }
  );
  return updatedCategory;
}

async function deleteCategory(categoryId) {
  const deletedCategory = await Category.findByIdAndDelete(categoryId);
  return deletedCategory;
}

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
