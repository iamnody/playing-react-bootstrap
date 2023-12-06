const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const Product = require('../models/productModel')

function createReview() {
  return asyncHandler(async (req, res) => {
    console.log(req.body)
    const product = await Product.findById(req.params.id)
    if (product) {
      const review = {
        user: req.user._id,
        rating: req.body.rating,
        comment: req.body.comment,
      }
      product.reviews.push(review)
      const updatedProduct = await product.save()
      console.log(updatedProduct)
      res.json(updatedProduct)
    } else {
      res.status(401)
      throw new Error('Reveiw for product not found')
    }
    // const product = new Product({
    //   ...req.body,
    //   user: req.user._id,
    //   image: '/images/sample.jpg',
    //   numReviews: 0,
    // })
    // const createdProduct = await product.save()
    // res.status(201).json(createdProduct)
  })
}

module.exports = { createReview }
