const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    title:String,
    desc:String,
    image:String,
    price:String,
    size:String
})
const product = mongoose.model('Product', productSchema);

module.exports ={product}