let passport = require('passport')

module.exports = function (app) {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function (user, done) {
    console.log("app.js", "serializeUser", user)
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    console.log("app.js", "deserializeUser", user)
    done(null, user)
  })

  require('./strategies/google.strategy')()
}