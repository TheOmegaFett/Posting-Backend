const { Post } = require("../models/post");

async function getPosts() {
  const posts = await Post.find();
  return posts;
}

async function getPostById(id) {
  const post = await Post.findById(id);
  return post;
}

async function createPost(post) {
  const newPost = await Post.create(post);
  return newPost;
}

async function updatePost(postId, post) {
  const updatedPost = await Post.findByIdAndUpdate(postId, post, { new: true });
  return updatedPost;
}

async function deletePost(postId) {
  const deletedPost = await Post.findByIdAndDelete(postId);
  return deletedPost;
}

// named exports
module.exports = {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
