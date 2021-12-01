var express = require('express');
const jack_controllers = require('../controllers/jack');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or  redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

///* GET home page. */
//router.get('/', function (req, res, next) {
//  res.render('jack', { title: 'Search Results for jacks' });
//});

/* GET jacks */
router.get('/', jack_controllers.jack_view_all_Page);
/* GET detail jack page */
router.get('/detail', jack_controllers.jack_view_one_Page);
/* GET create jack page */
router.get('/create', jack_controllers.jack_create_Page);
/* GET update costume page */ 
router.get('/update', jack_controllers.jack_update_Page);
/* GET delete jack page */
router.get('/delete', jack_controllers.jack_delete_Page); 
/* GET details with id of jack page */
router.get('/jack/:id', jack_controllers.jack_detail);
/* GET delete with id of jack page */
router.get('/jack/:id', jack_controllers.jack_detail);

module.exports = router;