let passport = require('passport')

module.exports = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, done) => {
    console.log("app.js", "serializeUser", user)
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    console.log("app.js", "deserializeUser", user)
    done(null, user)
  })

  require('./strategies/google.strategy')()
}