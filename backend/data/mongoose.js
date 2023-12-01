const mongoose = require('mongoose')

const isDev = !(process.env.MODE === 'pro')

mongoose
  .connect(isDev ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO)
  .then((conn) => isDev && console.log(`DB Connected: ${conn.connection.host}`))
  .catch((err) => {
    if (isDev) {
      console.log(err)
      console.log('DB Error')
    }
    process.exit(1)
  })
