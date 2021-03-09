const router = require('express').Router()
const productCtr = require('../controllers/product.controller')

router.post('/create', productCtr.create)

module.exports = router
