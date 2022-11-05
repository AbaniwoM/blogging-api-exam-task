const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
      enum: ['draft', 'published'],
    },
    read_count: {
      type: String,
      required: false,
    },
    reading_time: {
      type: String,
      required: false,
    },
    tags: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
