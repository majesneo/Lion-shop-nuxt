const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }
  ],
  color: [
    {
      type: Schema.Types.ObjectId,
      ref: 'color'
    }
  ],
  size: [
    {
      type: Schema.Types.ObjectId,
      ref: 'size'
    }
  ],
  title: String,
  brand: String,
  description: String,
  quantity: Number,
  sex: String,
  photo: String,
  price: Number,
  rating: [Number],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('product', productSchema)
