const passport = require('passport')
const { Router } = require('express')
const router = Router()
const postController = require('../controllers/post.controller')

router.post(
  '/admin',
  passport.authenticate('jwt', { session: false }),
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
router.put('/:id', postController.addView)

module.exports = router
