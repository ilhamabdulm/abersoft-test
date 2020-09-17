const bcrypt = require('bcryptjs')

function hashPass(plain) {
  const salt = bcrypt.genSaltSync(8)
  return bcrypt.hashSync(plain, salt)
}

function comparePass(plain, hash) {
  return bcrypt.compareSync(plain, hash)
}

module.exports = { hashPass, comparePass }
