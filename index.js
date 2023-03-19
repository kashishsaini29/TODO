const express = require("express");

const port = 8000;
const app = express();

const db = require("./config/mongoose");
const task=require('./models/tasks');

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());

// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is Running on port: ${port}`);
});
