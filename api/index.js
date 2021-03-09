const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./keys')
const passportStrategy = require('./middleware/passport-strategy')

const authAdminRoutes = require('./routes/admin/auth.routes')
const productRoutes = require('./routes/product/product.routes')
/* const authUserRoutes = require('./routes/user.routes') */
const categoryRoutes = require('./routes/product/category.routes')
const postRoutes = require('./routes/admin/post.routes')
const commentRoutes = require('./routes/admin/comment-posts.routes')

const app = express()

mongoose.connect(keys.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MONGO CONNECTED'))
  .catch(error => console.log(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use('/post', postRoutes)
app.use('/admin', authAdminRoutes)
app.use('/comment', commentRoutes)
/* app.use('/user', authUserRoutes) */
app.use('/product', productRoutes)
app.use('/category', categoryRoutes)

module.exports = app
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
