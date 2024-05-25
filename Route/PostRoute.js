const express = require("express");
const protect = require("../middleware/authmiddleware");
const router = express.Router();
const {
  createPost,
  updateLikes,
  addComment,
  fetchAllPosts,
  searchPost,
} = require("../Controller/PostController");

router.post("/createpost/:userId", createPost);
router.put("/likes/:postId", updateLikes);
router.put("/comment/:postId", addComment);
router.get("/all", fetchAllPosts);
router.get("/title", searchPost);

module.exports = router;
