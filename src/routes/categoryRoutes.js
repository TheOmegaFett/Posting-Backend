const express = require("express");

const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  const categories = await getCategories();
  res.json(categories);
});

categoryRouter.get("/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({
      error: `Category with id: ${req.params.id} not found`,
    });
  }
});

categoryRouter.post("/", async (req, res) => {
  const category = await createCategory(req.body);
  res.status(201).json(category);
});

categoryRouter.patch("/:id", async (req, res) => {
  const bodyData = {
    title: req.body.title,
    description: req.body.description,
  };
  const updatedCategory = await updateCategory(req.params.id, bodyData);
  if (updatedCategory) {
    res.json(updatedCategory);
  } else {
    res
      .status(404)
      .json({ error: `Category with id ${req.params.id} not found` });
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  const deletedCategory = await deleteCategory(req.params.id);
  if (deletedCategory) {
    res.json(deletedCategory);
  } else {
    res
      .status(404)
      .json({ error: `Category with id ${req.params.id} not found` });
  }
});

module.exports = categoryRouter;
