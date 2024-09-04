var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('beer', { bottles: 99 });
});

router.get('/:beer', function(req, res, next) {
  if (req.params.beer === '0') {
    res.render('empty');
    return;
  }
  res.render('beer', { bottles: req.params.beer });
});

module.exports = router;
