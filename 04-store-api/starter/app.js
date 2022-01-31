//console.log('04 Store API')
require('dotenv').config({path:"./config/config.env"});
require('express-async-errors');
const express = require("express");
const app = express();
const morgan  = require("morgan");

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json());
app.use(morgan('dev'))
// routes

app.get('/',(req,res)=>{
    return  res.send('<h1>Store API</h1><a href="/api/v1/stors/products">products route</a>');
})

// products route
app.use('/api/v1/stors/products',productsRouter);


app.use(notFoundMiddleware);
// error middlewars
app.use(errorHandlerMiddleware);
//PORT
const PORT = process.env.PORT || 3000
//SERVER Fn
const start = async () =>{
    try {
        //connectDB
      connectDB(process.env.MONGO_URI);
     //console.log(process.env.MONGO_URI)
      const  server = app.listen(PORT,console.log(`server is runing on port::${PORT}...`));
      process.on('unhandledRejection',err=>{ console.log("ERROR::",err); server.close(()=>process.exit(1))});
    } catch (error) {
        console.log(`ERROR:: ${console.error(error)}`)
        process.exit(1);
    }
}

start();