const { Router } = require('express')
const passport = require('passport')
const { login, createAdmin } = require('../../controllers/admin/auth.controller')
const router = Router()

router.post('/auth/login', login)
router.post('/auth/create/user',
  passport.authenticate('jwt', { session: false }),
  createAdmin
)

module.exports = router
