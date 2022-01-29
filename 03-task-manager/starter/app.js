//console.log('Task Manager App')
const express = require("express");
require("dotenv").config({ path: "./config/config.env" });
require("colors");
const connectDB = require("./db/connect");
const errorHandlreMiddleware = require("./middleware/error-handler")
const uri = process.env.MONGODB_URI;
const morgan = require('morgan');
//console.log(uri);

const PORT = process.env.PORT || 3000;

const app = express();

//set were env file is

//middlewares
app.use(express.static("./public"))
app.use(express.json());
app.use(morgan('dev'))
//set logger

// Mount Routes
app.use("/api/v1/tasks", require("./routes/tasksRoutes"));



// error middleware 
app.use(errorHandlreMiddleware)
app.use(require("./middleware/not_found"))


// connect to mongo DB

// set port, listen for requests

const start = async () => {
  try {
    await connectDB(uri);
    const server = app.listen(
      PORT,
      console.log(`server is runing on prot: ${PORT}...`)
    );
    // unhundled promis rejection
    process.on("unhandledRejection", (error, promis) => {
      //close saver
      console.log(`ERROR::${error}`.red);
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.log(error);
  }
};

start();
