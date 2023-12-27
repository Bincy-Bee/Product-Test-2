const { product } = require("../models/product.model");
const Razorpay = require('razorpay');

require("dotenv").config();

const razorpay = new Razorpay({
    key_id: process.env.Key_id,
    key_secret: process.env.Key_secret
})
const pay =async(req,res)=>{
    let option = {
        amount : req.body.amount*100,
    }
    razorpay.orders.create(option,(err, order)=>{
        if(err){
            return res.send({Error: err.message})
        }
        else{
            res.send(order)
        }
    })
}

const productData =async(req,res)=>{
    try {
        let data = await product.create(req.body);
        res.send(data);
    } catch (error) {
        return res.send({Error : error.message});
    }
}
const allproduct = async(req, res)=>{
    try {
        let data = await product.find();
        res.send(data)
    } catch (error) {
        return res.send({Error : error.message});
    }
}
module.exports ={productData,allproduct, pay}