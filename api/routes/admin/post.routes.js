const passport = require('passport')
const { Router } = require('express')
const router = Router()
const postController = require('../../controllers/admin/post.controller')
const upload = require('../../middleware/upload')

router.post(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  upload.single('photo'),
  postController.create
)

router.get(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  postController.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.remove
)

router.get('/', postController.getAll)
router.get('/:id', postController.getById)
router.put('/views/:id', postController.addView)

module.exports = router
