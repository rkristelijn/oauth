let passport = require('passport')
let FacebookStrategy = require('passport-facebook').Strategy

module.exports = () => {
  //get at developers.facebook.com
  passport.use(new FacebookStrategy({
    clientID: '143079706368075',
    clientSecret: 'c66a3db0c4a0be2c48af5e2553a76019',
    callbackURL: 'http://rpi1.gius.nl:3000/auth/facebook/callback',
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    let user = {}
    //user.email = profile.emails[0].value
    //user.image = profile._json.image.url
    user.displayName = profile.displayName
    user.facebook = {}
    user.facebook.id = profile.id
    user.facebook.token = accessToken

    done(null, user)
  }))
}
