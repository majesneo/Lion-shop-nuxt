const User = require('../models/user.model')


module.exports.login = async (req, res) => {
  const person = await User.findOne({login: req.body.login})
}
module.exports.createUser = async (req, res) => {

}
