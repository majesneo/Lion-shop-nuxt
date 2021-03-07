const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const authRoutes = require('./routes/auth.routes')
const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment-posts.routes')

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
app.use('/auth', authRoutes)
app.use('/comment', commentRoutes)

module.exports = app
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
