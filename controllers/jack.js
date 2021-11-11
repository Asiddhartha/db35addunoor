var Jack = require('../models/jack'); 

 
// for a specific Co. 
exports.jack_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jack detail: ' + req.params.id); 
}; 
 
// Handle Jack create on POST. 
exports.jack_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Jack(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
     
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle jack delete form on DELETE. 
exports.jack_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jack delete DELETE ' + req.params.id); 
}; 
 
// Handle jack update form on PUT. 
exports.jack_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jack update PUT' + req.params.id); 
};
// List of all Jacks 
exports.jack_list = async function(req, res) { 
    try{ 
        theJacks = await Jack.find(); 
        res.send(theJacks); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.jack_view_all_Page = async function(req, res) { 
    try{ 
        theJacks = await Jack.find(); 
        res.render('jack', { title: 'Jack Search Results', results: theJacks }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 