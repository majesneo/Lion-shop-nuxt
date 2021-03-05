const { Router } = require('express')
const router = Router()
const { create } = require('../controllers/comment-posts.controller')

router.post('/', create)

module.exports = router
