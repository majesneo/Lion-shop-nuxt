const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const mongoose = require('mongoose')
const keys = require('./keys')
const app = express()

module.exports = app

mongoose.connect(keys.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MONGO CONNECTED'))
  .catch(error => console.log(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)


if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

