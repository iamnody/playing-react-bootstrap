const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
require('./data/mongoose')
const path = require('path')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
colors.enable()
const isDev = !(process.env.MODE === 'pro')

const app = express()
if (isDev) {
  app.use(morgan('dev'))
}
app.use(cors())
app.use(express.json())

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/products', require('./routes/productRoutes'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

if (!isDev) {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5010
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
