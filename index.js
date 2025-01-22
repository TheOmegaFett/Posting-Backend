// import express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "Contact" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
