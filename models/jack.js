const mongoose = require("mongoose")
const jackSchema = mongoose.Schema({
    itemname: {
        type: String,
        minlength: 0,
        maxlength: 30,
    },
    price: {
        type: Number,
        minlength: 0,
        maxlength: 3,
    },
    quantity: {
        type: Number,
        minlength: 0,
        maxlength: 3
    }
})

module.exports = mongoose.model("jack", jackSchema)
