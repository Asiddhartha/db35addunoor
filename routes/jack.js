var express = require('express'); 
const jack_controllers= require('../controllers/jack'); 
var router = express.Router(); 
 
/* GET jacks */ 
router.get('/', jack_controllers.jack_view_all_Page );
router.get('/jack/:id', jack_controllers.jack_view_all_Page);
module.exports = router; 