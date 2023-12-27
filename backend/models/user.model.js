const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

const user = new mongoose.model('User', userSchema);

module.exports ={user}