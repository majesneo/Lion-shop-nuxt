const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')

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
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(authRoutes)


module.exports = app
if (require.main === module) {
  const port = process.env.PORT || 3001
  console.log(123455)
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

