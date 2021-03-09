const { model, Schema } = require('mongoose')

const colorSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  size: [
    {
      type: Schema.Types.ObjectId,
      ref: 'size'
    }
  ]
})

module.exports = model('color', colorSchema)
