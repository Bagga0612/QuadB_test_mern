const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors')

const connectdb = require('./Connection/db');
const itemModel = require('./Models/item');
const registerModel = require('./Models/Registers');
const cart = require('./Models/cartModel');
const { sanitizeFilter } = require("mongoose");


const app = express();
app.use(express.json());
app.use(cors())

const port = 7000;
connectdb()


// Registration API
app.post("/user-register", async (req, res) => {
    console.log("wwwwwww", req.body);
    try {
        const registerUser = new registerModel({
            user_name: req.body.name,
            user_mail: req.body.email,
            password: req.body.password,
            user_type: "customer"
        })
        await registerUser.save();
        res.send({
            status: "successfully_registered"
        })
    }
    catch (error) {
        res.status(400).send(error);
    }
})



// Login API
app.post("/user-login", async (req, res) => {
    console.log("ttttt", req.body);
    const user_data = await registerModel.findOne({ user_mail: req.body.email });
    console.log("mmmmm", user_data);
    if (user_data.password === req.body.password) {
        res.send({
            status: "successfully_login",
            data: user_data
        })
    }
    else {
        res.send({
            status: "Incorrect_password"
        })
    }
})




// Get product list API
app.get("/", async (req, res) => {
    const response = await itemModel.find()
    return res.json({ item: response })
})




// get product detail API
app.post("/product/getProductDetail", async (req, res) => {
    console.log("hhhhh", req.body.p_id)
    const product_detail = await itemModel.findOne({ _id: req.body.p_id });
    console.log("yyyy", product_detail)
    return res.json({ item: product_detail })
})





// add to cart product API
app.post('/add-to-cart', async (req, res) => {
    console.log("bbbbb", req.body)
    try {
        const addtocart = new cart({
            user_id: req.body.u_id,
            product_id: req.body.p_id
        })
        await addtocart.save();
        res.send({
            status: "successfully_added"
        })
    } catch (error) {
        res.status(400).send(error);
    }
})



// add new product in database API
app.post('/add-product', async (req, res) => {
    console.log("zzzzz", req.body)
    try {
        const addProduct = new itemModel({
            product_name: req.body.p_name,
            product_size: req.body.P_size,
            product_cloth: req.body.p_cloth,
            product_price: req.body.p_price
        })
        await addProduct.save();
        res.send({
            status: "Product_added"
        })
    }catch(error){
        res.status(400).send(error);
    }
})



// delete item from database API
app.post('/delete-data/:id', async (req,res)=>{
    try{
        await itemModel.deleteOne({_id: req.body.p_id});
        res.send({
            status:"Delete_done"
        })
    }catch(error){
        res.status(400).send(error);
    }
})


app.listen(port, () => console.log("Listing on port:", port));