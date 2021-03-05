const { model, Schema } = require('mongoose')

const commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  postId: {
    ref: 'post',
    type: Schema.Types.ObjectId
  }
})

module.exports = model('comments', commentSchema)
