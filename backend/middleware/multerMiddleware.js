const multer = require('multer')
const path = require('path')

// ! save by multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '__' + file.originalname)
//   },
// })
// ! save by sharp
const storage = multer.memoryStorage()
// ! end

const fileFilter = (req, file, cb) => {
  const filetypes = /jpg|jpeg|png|gif/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype.toLowerCase())
  if (extname && mimetype) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage,
  fileFilter,
})
