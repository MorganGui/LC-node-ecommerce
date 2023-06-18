const checkOwnOrAdmin = (req, res, next) => {
  if (req.user.id === parseFloat(req.params.id) || req.user.role === 'admin') {
    next()
  } else {
    res.status(401).end('unauthorized')
  }
}

module.exports = checkOwnOrAdmin
