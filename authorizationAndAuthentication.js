const express = require("express");
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");

app.use(express.json());
app.use(bodyparser.json());

const SECRET_KEY = "secretkey";

const user = {
  id: 1,
  username: "username",
  password: "pass123",
};

// Login route to generate JWT token
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  } else {
    return res.status(401).send("Invalid username or password");
  }
});

// Middleware to check JWT authorization
const authorizationToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("Access Denied");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token");
  }
};

// Protected route
app.get("/", authorizationToken, (req, res) => res.send("Hello World!"));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
