const express = require("express");
const mongoose = require("mongoose");
const { port, host, db } = require("/app/src/configuration");
const { connectDb } = require("/app/src/helpers/db");
const app = express();
const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema)


app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Our host is ${db}`);

    const silence = new Post({name:'Silence'})
    console.log(silence.name)
    
    silence.save(function(err,savedSilence){
      if (err) return console.error(err);
      console.log('savedSilence', savedSilence)
    });

    Post.find(function(err,posts){
      if (err) return console.error(err);
      console.log("posts", posts);
    });      

  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
