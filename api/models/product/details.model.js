const { model, Schema } = require('mongoose')

const detailsSchema = new Schema({
  color: {
    type: [String],
    required: true
  },
  photo: {
    type: [Object],
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  }
})

module.exports = model('details', detailsSchema)
