const mongoose = require("mongoose")
const jackSchema = mongoose.Schema({
    Itemname: String,
    quantity: Number,
    price: Number
})

module.exports = mongoose.model("jack", jackSchema)