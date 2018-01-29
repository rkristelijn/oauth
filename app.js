let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let passport = require('passport')
let session = require('express-session')

let index = require('./routes/index')
let users = require('./routes/users')
let auth = require('./routes/auth')

let app = express()
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({ // set these @ https://console.developers.google.com/, add Google+ and Contacts API
  clientID: '468098107681-ok607c02drturaldv3p5d4re5geops4e.apps.googleusercontent.com',
  clientSecret: 'kYPqgNK7seYAFGY1hkkRegmu',
  callbackURL: 'http://rpi1.gius.nl:3000/auth/google/callback'
}, function (req, accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
))

console.log('app.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'cookie_secret',
  name: 'cookie_name',
  // store: sessionStore, // connect-mongo session store
  // proxy: true,
  resave: true, // express-session deprecated undefined resave option; provide resave option at app.js
  saveUninitialized: true // express-session deprecated undefined saveUninitialized option; provide saveUninitialized option at app.js
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

app.use('/', index)
app.use('/users', users)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
