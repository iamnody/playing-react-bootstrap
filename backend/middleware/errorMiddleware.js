const notFound = (req, res, next) => {
  // todo don't know how this works
  // console.log(1)
  // const error = new Error(`Not Found - ${req.originalUrl}`)
  // res.status(404)
  // next(error)
}

const errorHandler = (err, req, res, next) => {
  let statusCode = ['4', '5'].some((x) => x === String(res.statusCode)[0])
    ? res.statusCode
    : 500

  let message = err.message.red

  if (process.env.MODE === 'dev') {
    console.log(message)
    // console.log(err)
  }

  res.status(statusCode).json({
    message: message,
  })
}

module.exports = { notFound, errorHandler }
