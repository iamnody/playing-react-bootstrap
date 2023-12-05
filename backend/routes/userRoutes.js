const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const { protect, admin } = require('../middleware/authMiddleware')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

router.get('/getUser/:id', protect, admin, getUser())
router.get('/getUsers', protect, admin, getUsers())
router.post('/register', register())
router.post('/login', login())
router.post('/saveAddress/:id', protect, saveAddress())
router.put('/updateUser', protect, updateUser())
router.put('/adminManageUser/:id', protect, admin, adminManageUser())
router.delete('/deleteUser/:id', deleteUser())

function getUser() {
  return asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  })
}

function getUsers() {
  return asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })
}

function register() {
  return asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.create({
      name,
      email,
      password,
    })

    const token = generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    })
  })
}

function login() {
  return asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(res, user._id)

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      })
    } else {
      res.status(401)
      throw new Error('Login failed')
    }
  })
}

function saveAddress() {
  return asyncHandler(async (req, res) => {
    if (!Object.values(req.body).every((value) => value)) {
      res.status(401)
      throw new Error('Address fields cannot be empty')
    }
    const user = await User.findById(req.user._id)
    if (!user) {
      res.status(401)
      throw new Error('Update user failed')
    }
    user.cart = req.body
    const updatedUser = await user.save()

    res.json({
      cart: updatedUser.cart,
    })
  })
}

// console.log(
//   [
//     {
//       name: 'a',
//       phoneNumber: '456-456',
//       address: 'asd',
//       city: 'das',
//       province: 'aaa',
//       postalCode: '456dfg',
//     },
//   ].every((item) => Object.values(item).every((value) => value))
// )

function updateUser() {
  return asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: req.body.token,
      })
    } else {
      res.status(401)
      throw new Error('Update user failed')
    }
  })
}

function adminManageUser() {
  return asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      const updatedUser = await user.save()
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      })
    } else {
      res.status(401)
      throw new Error('Update user failed')
    }
  })
}

function deleteUser() {
  return asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (user) {
      return res.json(user._id)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
}

module.exports = router
