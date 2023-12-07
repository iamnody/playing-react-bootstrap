const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const Product = require('../models/productModel')
const sharp = require('sharp')

function getProduct() {
  return asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      return res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
}

function getProducts() {
  return asyncHandler(async (req, res) => {
    const limit = 2
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
    const count = await Product.countDocuments({ ...keyword })

    const products = await Product.find({ ...keyword })
      .limit(limit)
      .skip(limit * (page - 1))

    res.json({ products, page, pages: Math.ceil(count / limit) })
  })
}

function createProduct() {
  return asyncHandler(async (req, res) => {
    req.body.user = req.user._id
    req.body.images = []
    for await (const file of req.files) {
      // ! sharp
      const url = 'uploads/' + Date.now() + '__' + file.originalname
      await sharp(file.buffer).resize(100, 100).toFile(url)
      // ! sharp end
      req.body.images = [...req.body.images, { name: file.originalname, url }]
    }

    console.log(req.body)
    const product = await Product.create(req.body)
    res.status(201).json()
  })
}

function updateProduct() {
  return asyncHandler(async (req, res) => {
    res.status(401)
    throw new Error('Update product failed')
    const product = await Product.findById(req.params.id)
    if (product) {
      product.name = req.body.name || product.name
      product.price = req.body.price || product.price
      product.image = req.body.images || product.images
      product.brand = req.body.brand || product.brand
      product.category = req.body.category || product.category
      product.description = req.body.description || product.description
      product.quantity = req.body.quantity || product.quantity

      const updatedProduct = await product.save()
      console.log(updatedProduct)
      res.json({})
    } else {
      res.status(401)
      throw new Error('Update product failed')
    }
  })
}

function deleteProduct() {
  return asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (product) {
      return res.json(product._id)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
