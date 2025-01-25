const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    name: String,
  },
  { collection: "categories" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
