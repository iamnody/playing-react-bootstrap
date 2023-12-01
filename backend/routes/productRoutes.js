const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const Product = require('../models/productModel')

router.get('/getProducts', getProducts())
router.get('/getProduct/:id', getProduct())

function getProducts() {
  return asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
}
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

module.exports = router
