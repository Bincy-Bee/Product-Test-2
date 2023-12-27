const mongoose = require('mongoose');
require("dotenv").config();

const connection = async()=>{
    let url = process.env.Port_URL;
    await mongoose.connect(url);
    console.log('mongodb connected successfully')
}

module.exports ={connection}