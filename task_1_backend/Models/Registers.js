const mongoose = require("mongoose");

const registerUserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user_type:{
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register", registerUserSchema);
module.exports = Register;