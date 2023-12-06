const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const cartItemSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
)

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    cart: {
      type: [cartItemSchema],
      required: true,
      default: [],
    },
    address: {
      name: { type: String, default: '' },
      phoneNumber: { type: String, default: '' },
      address: { type: String, default: '' },
      city: { type: String, default: '' },
      province: { type: String, default: '' },
      postalCode: { type: String, default: '' },
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

module.exports = User
