const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/99');
});

router.get('/:beer', function(req, res, next) {
  if (req.params.beer === '0') {
    res.render('empty');
  }
  if (!isNaN(req.params.beer) && req.params.beer < 100) {
    res.render('beer', { bottles: req.params.beer });
  }
  next(new Error('Invalid beer count'));
});

module.exports = router;
