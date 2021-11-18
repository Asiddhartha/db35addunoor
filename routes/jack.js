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
module.exports = router; 