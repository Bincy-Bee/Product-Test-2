const {Router} = require('express');
const { signup, login } = require('../controller/user.controller');
const userRouter = Router();

userRouter.post("/signup",signup);

userRouter.post("/login",login);



module.exports ={userRouter}