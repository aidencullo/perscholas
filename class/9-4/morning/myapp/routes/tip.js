const express = require('express');
const router = express.Router();

router.get('/:total/:tipPercentage', function(req, res, next) {
  if (isNaN(req.params.total) || isNaN(req.params.tipPercentage)) {
    res.send('Please provide valid numbers');
    return;
  }
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage;
  const tip = total * tipPercentage / 100;
  res.send('The tip is ' + tip);
});

router.get('/', function(req, res, next) {
  res.send('please provide total and tipPercentage');
});

module.exports = router;
