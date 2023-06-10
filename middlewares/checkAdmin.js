const checkAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next()
  } else {
    res.status(401).end('unauthorized')
  }
}

module.exports = checkAdmin
