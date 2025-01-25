const express = require("express");

const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

const postRouter = express.Router();

// GET - /posts
postRouter.get("/", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

// GET - /posts/:id
postRouter.get("/:id", async (req, res) => {
  const post = await getPostById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({
      error: `Post with id: ${req.params.id} not found`,
    });
  }
});

// POST - /posts
postRouter.post("/", async (req, res) => {
  const post = await createPost(req.body);
  res.json(post);
});

// PATCH - /posts/:id
postRouter.patch("/:id", async (req, res) => {
  const bodyData = {
    title: req.body.title,
    body: req.body.body,
    is_published: req.body.is_published,
  };
  const updatedPost = await updatePost(req.params.id, bodyData);
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: `Post with id ${req.params.id} not found` });
  }
});

// DELETE - /posts/:id
postRouter.delete("/:id", async (req, res) => {
  const deletedPost = await deletePost(req.params.id);
  if (deletedPost) {
    res.json(deletedPost);
  } else {
    res.status(404).json({ error: `Post with id ${req.params.id} not found` });
  }
});

module.exports = postRouter;
