const express = require('express');
const app     = express();
const api     = require('./api');
const PORT    = 80;


app.get('/', (req, res) => {
  res.json({ message: 'Hello, please, use /todos to get some results.' });
});

app.get('/todos', (req, res) => {
  api.getTodos()
    .then((todos) => {
      res.json({ todos });
    })
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id || 0;

  api.getTodoById(id)
    .then((todo) => {
      res.json({ todo });
    })
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
