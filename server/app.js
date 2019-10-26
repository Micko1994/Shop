const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const logger = require('morgan')
const config = require('./config/config')
const ErrorHandlerMiddle = require('./middleware/error-handler')

const app = express()

/**
 * @description Remove the X-Powered-By HTTP header.
 */
app.disable('x-powered-by')

app.use(logger('dev'))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * @description Init Mongoose connection.
 */

app.use(session({
  key: config.COOKIE.KEY,
  secret: config.COOKIE.SECRET,
  cookie: { maxAge: new Date(Date.now() + config.COOKIE.LIFETIME) },
  resave: true,
  saveUninitialized: false
}))


console.log('app use session!!!', session)

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'suitUp')

  const origin = req.headers['origin']
  if (origin && origin.indexOf('t.renderforest.com') > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  req.method === 'OPTIONS' ? res.sendStatus(200) : next()
})

console.log(' * * * STARTING * * * ')

require('./routes')(app)

app.use(ErrorHandlerMiddle.handleError())

module.exports = app
