let passport = require('passport')
let LinkedinStrategy = require('passport-linkedin').Strategy

module.exports = () => {
  //get at https://www.npmjs.com/package/passport-linkedin
  https://developer.linkedin.com/#
  passport.use(new LinkedinStrategy({
    consumerKey: '86k6pe79ixqstr',
    consumerSecret: 'SN9ktjovvW8EQW9V',
    callbackURL: 'http://rpi1.gius.nl:3000/auth/linkedin/callback',
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    let user = {}
    console.log(profile)
    //user.email = profile.emails[0].value
    //user.image = profile.avatar_url
    user.displayName = profile.displayName
    user.linkedin = {}
    user.linkedin.id = profile.id
    user.linkedin.token = accessToken
    
    done(null, user)
  }))
}
