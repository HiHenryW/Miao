import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    postImage: {
      type: String,
      required: true,
    },
    postLikes: {
      type: Number,
    },
    postDislikes: {
      type: Number,
    },
    postDesc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
