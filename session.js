const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', (req, res) => {
    if(req.session.views){
        req.session.views++;
        res.send(`Views: ${req.session.views}`);
    }
    else{
      res.session.views = 1;
      res.send('Welcome to the session demo. Refresh');
    }
}
);

app.listen(3000, () =>
     console.log('Server running at http://localhost:3000/'));
