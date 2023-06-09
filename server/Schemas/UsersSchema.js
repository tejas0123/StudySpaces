const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
     type: String,
     required: true
    },
    lastname:{
     type: String,
     required: true
    },
    email:{
     type: String,
     required: true,
     unique: true
    },
    password:{
     type: String,
     required:true
    },
    session:{
     type: Object
    }
 });

 //creating a collection
const User = mongoose.model("user", userSchema);

module.exports = User;