const {login, createUser} = require("../controllers/auth.controller");
const {Router} = require('express')
const router = Router()


router.post('/admin/login', login)
router.post('/admin/create', createUser)

module.exports = router
