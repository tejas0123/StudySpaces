const mongoose = require("mongoose");
const SpacesSchema = new mongoose.Schema({
    name:{
     type: String,
     required: true
    },
    creator:{
     type: String,
     required: true
    },
    subject:{
     type: String,
     required: true,
     unique: true
    },
    code:{
     type: String,
     required:true
    },
    desc:{
        type: String,
        required:true
    },
    students:{
        type:[String],
        required:true
    }
 });
 //creating a collection
 const Spaces = mongoose.model("space", SpacesSchema);
 module.exports = Spaces;