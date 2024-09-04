const express = require('express');
const router = express.Router();

router.get(/^\/(\d+)\/(\d+)$/, function(req, res) {
  const tip = req.params[0] * req.params[1] / 100;
  res.send('The tip is ' + tip);
});

router.get('*', function(req, res) {
  res.send('please provide valid numbers');
});

module.exports = router;
