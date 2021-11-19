<<<<<<< HEAD
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
=======
var express = require('express'); 
const jack_controllers= require('../controllers/jack'); 
var router = express.Router(); 
 
/* GET jacks */ 
router.get('/', jack_controllers.jack_view_all_Page );
router.get('/jack/:id', jack_controllers.jack_view_all_Page);
/* GET detail jack page */ 
router.get('/detail', jack_controllers.jack_view_one_Page); 
/* GET create jack page */ 
router.get('/create', jack_controllers.jack_create_Page); 
/* GET create update page */ 
router.get('/update', jack_controllers.jack_update_Page); 

/* GET create jack page */ 
router.get('/delete', jack_controllers.jack_delete_Page); 
 

module.exports = router; 
>>>>>>> cf9d950428f7f3f4703a1858182f107b52c4d347
