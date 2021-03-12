const Details = require('../../models/product/details.model')

module.exports.create = async (req, res) => {
  try {
    const details = new Details({
      color: req.body.color,
      photo: req.files,
      size: req.body.size,
      quantity: req.body.quantity,
      productId: req.body.productId
    })
    await details.save()
    res.status(201).json(details)
  } catch (e) {
    res.status(500).json(e)
  }
}
