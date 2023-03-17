const express = require("express");
const { port, host, db } = require("/app/src/configuration");
const { connectDb } = require("/app/src/helpers/db");
const app = express();



app.get("/test", (req, res) => {
  res.send("Our AUTH server is working correctly");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started AUTH service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Our host is ${db}`);  
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
