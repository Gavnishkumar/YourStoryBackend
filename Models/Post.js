const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  Image: { type: String, required: true },
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Likes: { type: Number, required: true, default: 0 },
  Comments: [
    {
      User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      Comment: { type: String, required: true },
    },
  ],
});

exports.Post = mongoose.model("Post", postSchema);
