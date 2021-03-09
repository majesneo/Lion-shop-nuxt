const { model, Schema } = require('mongoose')

const categorySchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  }
})

module.exports = model('category', categorySchema)
