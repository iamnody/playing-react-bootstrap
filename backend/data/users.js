// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'a',
    email: 'a@a.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'b',
    email: 'b@a.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'c',
    email: 'c@a.com',
    password: bcrypt.hashSync('123', 10),
  },
]

// export default users;
module.exports = users
