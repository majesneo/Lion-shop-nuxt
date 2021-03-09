/* const path = require('path') */
const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
})

const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'shop-nuxt',
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldName })
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload

/* const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../', 'static/posts/'))
  },
  filename (req, file, cb) {
    cb(null, `${file.originalname}`)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage, fileFilter, limits: { fileSize: 1024 * 1024 * 5 }
}) */
