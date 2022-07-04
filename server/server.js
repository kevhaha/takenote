const express = require('express');
const db = require('./db.js');
const model = require('./model.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/takenote', (req, res) => {
  //Write your route here!
  console.log('req:', req);
  console.log('res:', res);
  model.readAll()
  .then((response) => {
    // console.log('server succ:', response)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(response));
  })
  .catch((err) => {
    // console.log('server error:', err)
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(err));
  })
});

app.post('/takenote', (req, res) => {
  // console.log('req', req.body.data);
  const note = req.body.data;
  model.create(note)
  .then((response) => {
    console.log('postback', response)
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(response));
  })
  .catch((err) => {
    console.log('server error:', err)
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(err));
  })
});