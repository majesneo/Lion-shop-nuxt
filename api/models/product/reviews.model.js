const { model, Schema } = require('mongoose')

const reviewsSchema = new Schema({
  name: String,
  rating: Number,
  date: {
    type: Date,
    default: Date.now
  },
  title: String,
  description: String,
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
