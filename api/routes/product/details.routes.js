const router = require('express').Router()
const upload = require('../../middleware/upload')
const detailsCtr = require('../../controllers/product/details.controller')

router.post('/create', upload.array('photo'), detailsCtr.create)

module.exports = router
