const { model, Schema } = require('mongoose')

const sizeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    default: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  color: [
    {
      type: Schema.Types.ObjectId,
      ref: 'color'
    }
  ]
})

module.exports = model('size', sizeSchema)
