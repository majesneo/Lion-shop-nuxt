const router = require('express').Router()
const productCtr = require('../../controllers/product/product.controller')
const upload = require('../../middleware/upload')

router.post('/create', upload.array('photo'), productCtr.create)

router.get('/', productCtr.getAll)
router.get('/:id', productCtr.getById)
router.put('/:id', upload.single('photo'), productCtr.update)
router.delete('/:id', productCtr.remove)

module.exports = router
