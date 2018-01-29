const jwt = require('jsonwebtoken')
const Config = require('./../../config')
const adminPassword = Config.adminPassword
const tokenSecret = Config.tokenSecret
const adminUsername = Config.adminUsername
const environment = process.env.NODE_ENV || 'local'

// generate a basic token unless someone adds admin credentials to the request
function generateToken (req, res) {
  const { body } = req
  let token

  if ((body.username === adminUsername) && (body.password === adminPassword)) {
    token = createToken(true)
  } else {
    token = createToken(false)
  }

  res.send({ token })
}

function createToken (isAdmin) {
  return jwt.sign({ admin: isAdmin }, tokenSecret, { expiresIn: 2592000 })
}

function isAdminToken (token) {
  if (environment === 'local') { return true }

  return jwt.verify(token, tokenSecret, function (err, decodedToken) {
    if (err) { return false }
    return decodedToken.admin
  })
}

// This does basically nothing other than check if there is a token
// It can be further configured if auth gets more strict
function checkToken (req, res, next) {
  if (environment === 'local') { return next() }

  const token = req.headers.authorization

  try {
    const decoded = jwt.verify(token, tokenSecret)
    return next()
  } catch (err) {
    res.sendStatus(400)
  }
}

function checkAdmin (req, res, next) {
  if (environment === 'local') { return next() }

  const token = req.headers.authorization

  try {
    const decoded = jwt.verify(token, tokenSecret)
    if (decoded.admin) {
      return next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    res.sendStatus(400)
  }
}

module.exports = {
  isAdminToken,
  generateToken,
  checkToken,
  checkAdmin
}
