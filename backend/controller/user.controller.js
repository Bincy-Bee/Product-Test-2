const { user } = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signup=async(req,res)=>{
    try {
        let {name,email, password,role}= req.body;
        let data = await user.findOne({ email: email});
        if(data){
            return res.send({msg:'User Already Registered with this email address'})
        }
        else{
            bcrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else{
                    let obj={name:name, email:email, password:hash,role:role}
                    let data = await user.create(obj);
                    let token = jwt.sign({id:data.id, role:data.role}, "secret");
                    res.json({token:token, info:data});
                }
            })
        }
    } catch (error) {
        return res.status({Message:error.message});
    }
}

const login = async(req,res)=>{
    try {
        let {email, password}= req.body;
        let data = await user.findOne({ email: email});
        if(data){
            bcrypt.compare(password,data.password,async(err, result)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else if(result){
                    let name = data.name;
                    let token = jwt.sign({id:data.id, role:data.role}, "secret");
                    res.cookie("token",token).json({token:token, name:name, msg:'Login successfully signed'})
                }
                else{
                    return res.status({Message:'Password mismatch'})
                }
            })
        }
        else{
            return res.status({Message:'User not found'})
        }
    } catch (error) {
        return res.status({Message:error.message});
    }
}
module.exports={signup, login}