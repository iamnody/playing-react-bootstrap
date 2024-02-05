const mongoose = require('mongoose')

const { Schema, model } = mongoose

const reviewSchema = mongoose.Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [
      {
        name: { type: String, required: true, default: 'sample.jpg' },
        url: { type: String, required: true, default: '/images/sample.jpg' },
      },
    ],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

reviewSchema.post('save', function () {
  const product = this.parent()

  product.numReviews = product.reviews.length
  product.rating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.numReviews

  product.save()
})

reviewSchema.post('remove', function () {
  const product = this.parent()

  product.numReviews = product.reviews.length
  product.rating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.numReviews

  product.save()
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
