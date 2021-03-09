const Product = require('../models/product/product.model')

module.exports.create = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity,
      sex: req.body.sex,
      photo: req.body.photo,
      price: req.body.price
    })
    await product.save()
    res.status(201).json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}
