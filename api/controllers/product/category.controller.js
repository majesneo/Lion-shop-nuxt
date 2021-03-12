const Category = require('../../models/product/category.model')

module.exports.create = async (req, res) => {
  try {
    const category = new Category({
      title: req.body.title
    })
    await category.save()
    res.status(201).json(category)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    res.static(200).json(category)
  } catch (e) {
    res.status(500).json(e)
  }
}
