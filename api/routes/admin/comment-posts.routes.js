const { Router } = require('express')
const router = Router()
const { create } = require('../../controllers/admin/comment-posts.controller')

router.post('/', create)

module.exports = router
