var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  res.send(`Howdy ${req.params.name}`);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Howdy friend`);
});

module.exports = router;
