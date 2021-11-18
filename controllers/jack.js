var jack = require('../models/jack');

// List of all jack
exports.jack_list = async function (req, res) {
    try {
        thejack = await jack.find();
        res.send(thejack);
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
    res.send('NOT IMPLEMENTED: jack list');
};

// for a specific jack.
exports.jack_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await jack.findById(req.params.id)
        res.send(result)
    }
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    res.send('NOT IMPLEMENTED: jack list');
};

// Handle jack create on POST. 
exports.jack_create_post = async function (req, res) {
    console.log(req.body)
    let document = new jack();
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle jack delete on DELETE. 
exports.jack_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await jack.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle jack update form on PUT.
exports.jack_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await jack.findById(req.params.id);
        // Do updates of properties
        if (req.body.Itemname)
            toUpdate.Itemname = req.body.Itemname;
        if (req.body.price)
            toUpdate.price = req.body.price;
        if (req.body.Quantity)
            toUpdate.Quantity = req.body.Quantity;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
    res.send('NOT IMPLEMENTED: jack list');
};

exports.jack_view_all_Page = async function (req, res) {
    try {
        thejack = await jack.find();
        res.render('jack', { title: 'jack Search results', results: thejack });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};