const { model, Schema } = require('mongoose')

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default: 0
  },
  dislike: {
    type: Number,
    default: 0
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  }
})
module.exports = model('reviews', reviewsSchema)
