const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const { protect, admin } = require('../middleware/authMiddleware')
const Product = require('../models/productModel')

router.get('/getProducts', getProducts())
router.get('/getProduct/:id', getProduct())
router.post('/createProduct', protect, admin, createProduct())
router.put('/updateProduct/:id', protect, admin, updateProduct())
router.delete('/deleteProduct/:id', deleteProduct())

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
    const products = await Product.find({})
    res.json(products)
  })
}

function createProduct() {
  return asyncHandler(async (req, res) => {
    const product = new Product({
      ...req.body,
      user: req.user._id,
      image: '/images/sample.jpg',
      numReviews: 0,
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })
}

function updateProduct() {
  return asyncHandler(async (req, res) => {
    // {
    //   name: string
    //   price: number
    //   image: {}
    //   brand: string
    //   category: string
    //   description: string
    //   countInStock: number
    // }
    const product = await Product.findById(req.params.id)
    if (product) {
      product.name = req.body.name || product.name
      product.price = req.body.price || product.price
      product.image = req.body.image || product.image
      product.brand = req.body.brand || product.brand
      product.category = req.body.category || product.category
      product.description = req.body.description || product.description
      product.countInStock = req.body.countInStock || product.countInStock

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

module.exports = router
