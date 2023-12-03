const router = require('express').Router()
const asyncHandler = require('../middleware/asyncHandler')
const { protect, admin } = require('../middleware/authMiddleware')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

router.post('/register', register())
router.post('/login', login())
router.put('/updateUser', protect, updateUser())
router.get('/getUsers', protect, admin, getUsers())
router.get('/getUser/:id', protect, admin, getUser())
router.put('/adminManageUser/:id', protect, admin, adminManageUser())

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

function getUsers() {
  return asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })
}

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

module.exports = router
