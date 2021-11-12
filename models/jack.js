const mongoose = require("mongoose")
const jackSchema = mongoose.Schema({
    Itemname: String,
    Quantity: Number,
    price: Number
})

module.exports = mongoose.model("jack", jackSchema)