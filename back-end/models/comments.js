const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
