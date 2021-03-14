const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  brand: String,
  title: String,
  description: String,
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'reviews'
    }
  ],
  details: [
    {
      type: Schema.Types.ObjectId,
      ref: 'details'
    }
  ],
  sex: String,
  price: Number,

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('product', productSchema)
