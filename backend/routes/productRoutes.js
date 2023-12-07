const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const { protect, admin } = require('../middleware/authMiddleware')
const upload = require('../middleware/multerMiddleware')
const Product = require('../models/productModel')

const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')
const { createReview } = require('../controllers/reviewController')

// @@@ api/products
// products
router.get('/getProducts', getProducts())
router.get('/getProduct/:id', getProduct())
router.post(
  '/createProduct',
  protect,
  admin,
  upload.array('files'),
  createProduct()
)
router.put('/updateProduct/:id', protect, admin, updateProduct())
router.delete('/deleteProduct/:id', deleteProduct())
// reviews
router.post('/reviews/createReview/:id', protect, createReview())

module.exports = router
