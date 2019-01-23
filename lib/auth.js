const isUserAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization

  // Either way, reject with forbidden
  if (!authHeader) {
    return res.sendStatus(403)
  } else {
    return res.sendStatus(403)
  }
}

module.exports = isUserAuthenticated
