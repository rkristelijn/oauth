let express = require('express')
let passport = require('passport')
let router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('auth.js', 'Time: ', Date.now())
  next()
})

router.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/users/',
    failure: '/error/'
  }))

router.route('/google')
  .get(passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }))

module.exports = router