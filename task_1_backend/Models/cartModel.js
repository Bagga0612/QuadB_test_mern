const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user_id:{
        type:String,
        unique: true,
        required: true
    },
    product_id:{
        type: String,
        required: true,
        unique: true
    }
})

const Cart = mongoose.model("cart", cartSchema)
module.exports= Cart