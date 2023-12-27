const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser')
const { connection } = require('./config/connection');
const { userRouter } = require('./routes/user.routes');
const { productRouter } = require('./routes/product.routes');
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(cookie());
app.use("/user",userRouter)
app.use("/product", productRouter)

app.listen(8090, ()=>{
    console.log('Server listening on port http://localhost:8090');
    connection();
})
