const jwt = require('jsonwebtoken')
const { jwtKey } = require('../data/keys')

const checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, jwtKey)
    req.user = decoded
    next()
  } catch {
    res.status(401).json('wrong token')
  }
}

module.exports = checkToken
