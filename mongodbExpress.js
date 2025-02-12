const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb").then(() => { 
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err);
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
