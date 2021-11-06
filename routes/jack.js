var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jack', { title: 'Search Results for jack' });
});

module.exports = router;