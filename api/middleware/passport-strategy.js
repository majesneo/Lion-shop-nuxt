const { Strategy, ExtractJwt } = require('passport-jwt')
const keys = require('../keys')
const Admin = require('../models/admin/admin-user.model')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const user = await Admin.findById(payload.userId).select('id')
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch (e) {
    console.error(e)
  }
})
