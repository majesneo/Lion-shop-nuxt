const Reviews = require('../../models/product/reviews.model')

module.exports.create = async (req, res) => {
  try {
    const reviews = new Reviews({
      name: req.body.name
    })
    await reviews.save()
  } catch (e) {
    res.status(500).json(e)
  }
}
