const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// create comment model from CommentSchema
const Comment = model('Comment', CommentSchema);

module.exports = Comment;