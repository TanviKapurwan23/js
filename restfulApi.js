const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require("body-parser");


app.use(express.json());
const todos = [];
app.post('/addTodo', (req, res) => {    
    const { todo } = req.body;
    todos.push(todo);
    res.send('Todo added successfully');
});

app.get('/', (req, res) => {
    res.json(todos);
});

app.get('/:id', (req, res) => { 
    const todos = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send('The todo with the given ID was not found');
    res.json(todo);
});

app.get('/', (req, res) => {
   res.send('Hello World!');
} );

app.listen(port, () => 
    {  console.log(`Server running at http://localhost:${port}/`); });
