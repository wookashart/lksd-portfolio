const express = require('express');
const bodyParser = require('body-parser');
const open = require('open');
const renderHtml = require('./server/html');

const port = 3000;
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  res.send(renderHtml);
})

app.listen(port, error => !error ? open(`http://localhost:${port}`) : console.log(`error: ${error}`));