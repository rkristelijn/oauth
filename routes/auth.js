let express = require('express')
let passport = require('passport')
let router = express.Router()

console.log('auth.js')

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// router.get('/', function (req, res) {
//   res.send('Birds home page')
// })

// router.get('/google', function (req, res) {
//   res.send('Google home page')
// })

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