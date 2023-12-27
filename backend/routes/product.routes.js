const {Router} = require('express');
const { productData, allproduct, pay } = require('../controller/product.controller');
const productRouter = Router();

productRouter.post("/createProduct", productData);

productRouter.get("/allProduct", allproduct);

productRouter.post("/payment", pay);

module.exports ={productRouter}