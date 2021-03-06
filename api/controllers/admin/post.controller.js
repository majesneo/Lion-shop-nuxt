const Post = require('../../models/admin/post.model')
const Comment = require('../../models/admin/comment.model')

module.exports.create = async (req, res) => {
  console.log(req)
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tag: req.body.tag,
    imageURL: req.file
  })
  try {
    await post.save()
    res.status(201).json({
      success: true,
      message: `Your post: ${post} created`
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).lean()
    res.json(posts)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id)
      .populate('comments').lean().exec((error, post) => {
        res.json(post)
      })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    title: req.body.title,
    content: req.body.content
  }
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, { $set }, { new: true })
    res.json(post)
  } catch (e) {
    res.status()
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    await Comment.deleteMany({ postId: req.params.id })
    res.json({ message: 'Пост удален' })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAnalytics = async (req, res) => {
  try {
    const posts = await Post.find()
    const labels = posts.map(post => post.title)
    const json = {
      comments: {
        labels,
        data: posts.map(post => post.comments.length)
      },
      views: {
        labels,
        data: posts.map(post => post.views)
      }
    }
    res.json(json)
  } catch (error) {
    res.status(500).json(error)
  }
}
