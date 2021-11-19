var express = require('express');
const jack_controllers = require('../controllers/jack');
var router = express.Router();

///* GET home page. */
//router.get('/', function (req, res, next) {
//  res.render('jack', { title: 'Search Results for jacks' });
//});

/* GET jacks */
router.get('/', jack_controllers.jack_view_all_Page);
router.get('/jack/:id', jack_controllers.jack_detail);
/* GET detail jack page */
router.get('/detail', jack_controllers.jack_view_one_Page);

module.exports = router;