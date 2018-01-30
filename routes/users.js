let express = require('express');
let router = express.Router();
let User = require('../models/user-model')
let facebook = require('../services/facebook-service')(
  '143079706368075',
  'c66a3db0c4a0be2c48af5e2553a76019'
)

router.use('/', (req, res, next) => {
  if (!req.user)
    res.redirect('/')
  else
    next();
})

router.get('/', (req, res, next) => {
  if (req.user.facebook) {
    facebook.getImage(req.user.facebook.token, function (results) {
      req.user.facebook.image = results.url
      res.render('users', {
        user: req.user
      })
    })
  }
  else {
    res.render('users', {
      user: req.user
    })
  }
});

module.exports = router;
