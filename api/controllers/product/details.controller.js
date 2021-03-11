const Details = require('../../models/product/details.model')

module.exports.create = async (req, res) => {
  try {
    const details = new Details({
      color: req.body.color,
      photo: req.files,
      size: req.body.size,
      quantity: req.body.quantity
    })
    await details.save()
  } catch (e) {
    res.status(500).json(e)
  }
}
