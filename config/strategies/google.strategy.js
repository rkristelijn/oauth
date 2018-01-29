let passport = require('passport')
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

module.exports = () => {
  passport.use(new GoogleStrategy({ // set these @ https://console.developers.google.com/, add Google+ and Contacts API
    clientID: '468098107681-ok607c02drturaldv3p5d4re5geops4e.apps.googleusercontent.com',
    clientSecret: 'kYPqgNK7seYAFGY1hkkRegmu',
    callbackURL: 'http://rpi1.gius.nl:3000/auth/google/callback'
  }, function (req, accessToken, refreshToken, profile, done) {
    let user = {}
    user.email = profile.emails[0].value
    user.image =  profile._json.image.url
    user.displayName = profile.displayName
    user.google = {}
    user.google.id = profile.id
    user.google.token = accessToken

    done(null, user)
  }
  ))
}
