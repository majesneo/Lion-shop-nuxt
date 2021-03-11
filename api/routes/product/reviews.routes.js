const router = require('express').Router()
const reviewsCtr = require('../../controllers/product/reviews.controller')

router.post('/', reviewsCtr.create)

module.exports = router
