const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { collection: "categories" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
