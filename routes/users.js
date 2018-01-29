var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.user)
  res.render('users', {
    user: {
      name: req.user.displayName,
      image: req.user._json.image.url
    }
  })
});

module.exports = router;
