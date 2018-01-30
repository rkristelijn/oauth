let OAuth2 = require('oauth').OAuth2

module.exports = (key, secret) => {
  // @see https://developers.facebook.com/docs/graph-api/reference/user/picture/
  let oauth = new OAuth2(
    key,
    secret,
    'https://graph.facebook.com',
    null,
    'oauth2/token',
    null
  )

  let getImage = function (userKey, done) {
    oauth.get(
      `https://graph.facebook.com/v2.11/me/picture?redirect=false&type=large`,
      userKey,
      function(err, results, res) {
        results = JSON.parse(results)
        done(results.data)
      }
    )
  }

  return {
    getImage: getImage
  }
}