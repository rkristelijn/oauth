let passport = require('passport')
let TwitterStrategy = require('passport-twitter').Strategy

module.exports = () => {
  //go to dev.twitter.com / manage your app
  passport.use(new TwitterStrategy({
    consumerKey: '7Z6Z83muXzvv6by8svDDpw3Qu',
    consumerSecret: 'wdWXUHmE1jAqKmr7Uhxtm8lrpsPqrbPAW8WotMCRiwxGgctFFs',
    callbackURL: 'http://rpi1.gius.nl:3000/auth/twitter/callback',
    passReqToCallback: true
  }, function (req, token, tokenSecret, profile, done) {
    let user = {}
    //user.email = profile.emails[0].value //twitter does not have an e-maildress
    user.image = profile._json.profile_image_url
    user.displayName = profile.displayName
    user.twitter = {}
    user.twitter.id = profile.id
    user.twitter.token = token

    done(null, user)
  }))
}