const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  brand: String,
  title: String,
  description: String,
  quantity: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  characteristic: {
    color: String,
    photo: [Object],
    size: String,
    rating: [Number],
    sex: String
  },
  pricing: {
    price: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('product', productSchema)
