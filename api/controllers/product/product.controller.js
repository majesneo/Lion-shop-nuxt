const Product = require('../../models/product/product.model')

module.exports.create = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      category: req.body.category,
      categoryName: req.body.categoryName,
      description: req.body.description,
      sex: req.body.sex,
      price: req.body.price,
      brand: req.body.brand
    })
    await product.save()
    res.status(201).json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    await Product.find()
      .populate('category')
      .populate('details')
      .lean()
      .exec((err, products) => {
        res.json(products)
      })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Product.findById(req.params.id)
      .populate('category')
      .populate('details')
      .lean()
      .exec((err, product) => {
        res.json(product)
      })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, {
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity,
      sex: req.body.sex,
      photo: req.file.location,
      price: req.body.price
    }, { upsert: true })
    res.json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id })
    res.json({ message: 'Product deleted' })
  } catch (e) {
    res.status(500).json(e)
  }
}
