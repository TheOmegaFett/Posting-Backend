const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    title: String,
    Description: String,
  },
  { collection: "categories" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
