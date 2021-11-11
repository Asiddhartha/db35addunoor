var express = require('express'); 
const jack_controlers= require('../controllers/jack'); 
var router = express.Router(); 
 
/* GET jacks */ 
router.get('/', jack_controlers.jack_view_all_Page ); 
module.exports = router; 