const mongodb = require("mongoose");

const itemSchema = new mongodb.Schema({
    product_name: String,
    product_price: String,
    product_size: String,
    product_cloth: String
})

const itemModel =mongodb.model("Item", itemSchema)
module.exports= itemModel