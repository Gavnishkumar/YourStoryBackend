const Post = require("../Models/Post");
const User = require("../Models/User");

// Create a new post
const createPost = async (req, res) => {
  const userId = req.params.userId;
  const { Image, Title, Description } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newPost = new Post({
      User: userId,
      Image,
      Title,
      Description,
    });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update likes on a post
const updateLikes = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.Likes += 1;
    await post.save();

    res.status(200).json({ message: "Post liked successfully", likes: post.Likes });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a comment to a post
const addComment = async (req, res) => {
  const postId = req.params.postId;
  const { userId, comment } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.Comments.push({
      User: userId,
      Comment: comment,
    });

    await post.save();

    res
      .status(200)
      .json({ message: "Comment added successfully", comments: post.Comments });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch all posts
const fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("User", "username email")
      .populate("Comments.User", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Search posts by title
const searchPost = async (req, res) => {
  const { title } = req.query;
  try {
    const posts = await Post.find({ Title: { $regex: title, $options: "i" } })
      .populate("User", "username email")
      .populate("Comments.User", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createPost,
  updateLikes,
  addComment,
  fetchAllPosts,
  searchPost,
};
