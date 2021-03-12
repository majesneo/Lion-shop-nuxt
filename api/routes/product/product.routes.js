const router = require('express').Router()
const upload = require('../../middleware/upload')
const productCtr = require('../../controllers/product/product.controller')

router.post('/create', productCtr.create)

router.get('/', productCtr.getAll)
router.get('/:id', productCtr.getById)

router.put('/:id', upload.single('photo'), productCtr.update)

router.delete('/:id', productCtr.remove)

module.exports = router
