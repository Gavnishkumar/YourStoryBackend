const mongoose = require("mongoose");
const Profile = require("./Profile");

const commentSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    Comment: {
      type: String,
      required: true,
      maxlength: 500, // Example validation rule
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the comments
  }
);

const postSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    Image: {
      type: String,
      default:""
    },
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
      maxlength: 1000, // Example validation rule
    },
    LikedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    }],
    Likes: {
      type:Number,
      default: 0
    },
    Comments: [commentSchema],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the posts
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
