let express = require('express');
let router = express.Router();
let User = require('../models/user-model')

router.use('/', (req, res, next) => {
  if (!req.user)
    res.redirect('/')
  else
    next();
})

router.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('users', {
    user: req.user
  })
});

module.exports = router;
