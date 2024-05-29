const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

const {
  createPost,
  updateLikes,
  addComment,
  fetchAllPosts,
  searchPost,
  updatePost,
} = require("../Controller/PostController");

router.post("/createpost/:profileId", protect, createPost);
router.put("/updatepost/:postId", protect, updatePost);
router.put("/likes/:postId", protect, updateLikes);
router.put("/comment/:postId", protect, addComment);
router.get("/all", protect, fetchAllPosts);
router.get("/title", protect, searchPost);
module.exports = router;