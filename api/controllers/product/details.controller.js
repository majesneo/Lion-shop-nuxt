const Details = require('../../models/product/details.model')
const Product = require('../../models/product/product.model')

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
    const product = await Product.findById(req.body.productId).lean()
    product.details.push(details._id)
    await product.save()
    res.status(201).json(details)
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const details = await Details.findOne({ productId: req.params.id }).lean()
    res.json(details)
  } catch (e) {
    res.status(500).json(e)
  }
}
