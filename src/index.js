// import express
const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routes/postRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const commentRouter = require("./routes/commentRoutes");
const logger = require("./middlewares/logger");
const checkIfAdmin = require("./middlewares/checkIfAdmin");

const app = express();
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    data: "Hello World!!",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    data: "Another route named hello",
  });
});

app.use("/posts", postRouter);
app.use("/categories", categoryRouter);
app.use("/comments", commentRouter);

app.listen(3000, async () => {
  console.log("Server started");
  await mongoose.connect("mongodb://127.0.0.1:27017/blog_db");
  console.log("Connected to MongoDB");
});
