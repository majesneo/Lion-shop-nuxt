const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'address'
  }
})

module.exports = model('user', userSchema)
