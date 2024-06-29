const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: {
        type:String,
        default: "visitor"
    }
  });
  
 const UserModel = mongoose.model("users", schema)
 module.exports = UserModel