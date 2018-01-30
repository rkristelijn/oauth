let passport = require('passport')
let GithubStrategy = require('passport-github').Strategy

module.exports = () => {
  //get at https://github.com/settings/applications/659234
  passport.use(new GithubStrategy({
    clientID: '2e607897e6ad15e52d5d',
    clientSecret: '2475c03d69b707f6c8248ab1da15d9d3e1c58090',
    callbackURL: 'http://rpi1.gius.nl:3000/auth/github/callback'
  }, function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    let user = {}
    //user.email = profile.emails[0].value
    user.image = profile.photos[0].value
    user.displayName = profile.displayName
    user.github = {}
    user.github.id = profile.id
    user.github.token = accessToken

    done(null, user)
  }))
}
