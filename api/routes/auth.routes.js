const { Router } = require('express')
const passport = require('passport')
const { login, createUser } = require('../controllers/auth.controller')
const router = Router()

router.post('/admin/login', login)
router.post('/admin/create/user',
  passport.authenticate('jwt', { session: false }),
  createUser
)

module.exports = router
