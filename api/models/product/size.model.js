const { model, Schema } = require('mongoose')

const sizeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    default: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  }
})

module.exports = model('size', sizeSchema)
