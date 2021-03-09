const { model, Schema } = require('mongoose')

const colorSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = model('color', colorSchema)
