const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server **only after successful DB connection**
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the app if DB connection fails
  });

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
