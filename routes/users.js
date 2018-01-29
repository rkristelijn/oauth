var express = require('express');
var router = express.Router();

router.use('/', (req, res, next) => {
  if(!req.user)
    res.redirect('/')
  else
    next();
})

router.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('users', {
    user: {
      name: req.user.displayName,
      image: req.user.image
    }
  })
});

module.exports = router;
