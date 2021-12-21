//console.log('Task Manager App')
const express = require("express");
require("colors");
const connectDB = require("./db/connect");
const uri =
  "mongodb+srv://Nsowa:123456789@pacticdb.aqejg.mongodb.net/03-Task-Manager?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

const app = express();

//set were env file is

// json body passer middleware
app.use(express.json());

//set logger

// Mount Routes
app.use("/api/v1/tasks", require("./routes/tasksRoutes"));

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
