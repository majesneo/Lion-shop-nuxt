const {login, createUser} = require("@/server/controllers/auth.controller");
const {Router} = require('express')
const router = Router()

module.exports = router

router.post('/admin/login', login,)
router.post('/admin/create', createUser,)
