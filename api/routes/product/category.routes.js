const router = require('express').Router()
const categoryCtr = require('../../controllers/product/category.controller')

router.get('/', categoryCtr.getAll)
router.post('create', categoryCtr.create)

module.exports = router
