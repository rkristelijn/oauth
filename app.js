let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
//let passport = require('passport')
let session = require('express-session')

let index = require('./routes/index')
let users = require('./routes/users')
let auth = require('./routes/auth')
let app = express()

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

require('./config/passport')(app)

app.use('/', index)
app.use('/users', users)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
