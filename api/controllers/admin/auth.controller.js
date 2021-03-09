const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const Admin = require('../../models/admin/admin-user.model')
const keys = require('../../keys')

module.exports.login = async (req, res) => {
  const user = await Admin.findOne({ login: req.body.login })
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
module.exports.createAdmin = async (req, res) => {
  const user = await Admin.findOne({ login: req.body.login })
  if (user) {
    res.status(409).json({ message: 'Username already exists' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new Admin({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })
    await user.save()
    res.status(201).json(user)
  }
}
