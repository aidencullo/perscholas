var express = require('express');
var router = express.Router();

router.get('/:total/:tipPercentage', function(req, res, next) {
  var total = req.params.total;
  var tipPercentage = req.params.tipPercentage;
  var tip = total * tipPercentage / 100;
  res.send('The tip is ' + tip);
});

router.get('/', function(req, res, next) {
  res.send('please provide total and tipPercentage');
});

module.exports = router;
