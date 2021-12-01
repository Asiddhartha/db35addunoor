var express = require('express');
var router = express.Router();

// Require controller modules. 
var api_controller = require('../controllers/api');
var jack_controller = require('../controllers/jack');

/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api);

/// JACK ROUTES /// 

// POST request for creating a Jack.  
router.post('/jack', jack_controller.jack_create_post);

// DELETE request to delete Jack. 
router.delete('/jack/:id', jack_controller.jack_delete);

// PUT request to update Jack. 
router.put('/jack/:id', jack_controller.jack_update_put);

// GET request for one Jack. 
router.get('/jack/:id', jack_controller.jack_detail);

// GET request for list of all Jack items. 
router.get('/jack', jack_controller.jack_list);

module.exports = router;