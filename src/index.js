const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

let tasks = [];

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Started successfully, open localhost:3000.'));

app.get('/tasks', (req, res) => {
  res.send(JSON.stringify(tasks));
});

app.post('/tasks', (req, res) => {  
  const taskText = req.body.task;
  tasks.push(taskText);
  res.send('');
});

app.delete('/tasks', (req, res) => {  
  // tasks.splice(req.params.id, 1);
  tasks = [];
  res.statusCode = 200;
  res.send('');
});

app.get('/', (req, res) => {
  let contents = fs.readFileSync('content/index.html', 'utf8');
  res.send(contents);
});