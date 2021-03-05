const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const keys = require('../keys')

module.exports.login = async (req, res) => {
  const user = await User.findOne({ login: req.body.login })
  if (user) {
    const isCorrectPassword = bcrypt.compareSync(req.body.password, user.password)

    if (isCorrectPassword) {
      const token = jwt.sign({
        login: user.login,
        userId: user._id
      }, keys.JWT, { expiresIn: 60 * 60 })

      res.status(200).json({ token })
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}
module.exports.createUser = async (req, res) => {
  const user = await User.findOne({ login: req.body.username })
  if (user) {
    res.status(409).json({ message: 'Username already exists' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      login: req.body.username,
      password: bcrypt.hashSync(req.body.password, salt)
    })
    await user.save()
    res.status(201).json(user)
  }
}
