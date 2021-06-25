const express = require('express');
const app = express();
const PORT = 4000;
const config = require('../config.js');
const axios = require('axios');
const compression = require('compression');

app.use(compression());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.all('/products', (req, res, next) => {
  console.log(req.url);
  axios({
    url: 'http://localhost:3005' + req.url,
    method: req.method,
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log('err'));
});

app.all('/products/:productid', (req, res, next) => {
  console.log(req.url);
  axios({
    url: 'http://localhost:3005' + req.url,
    method: req.method,
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log('err'));
});

app.all('/products/:productid/styles', (req, res, next) => {
  console.log(req.url);
  axios({
    url: 'http://localhost:3005' + req.url,
    method: req.method,
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log('err'));
});

app.all('/products/:productid/related', (req, res, next) => {
  console.log(req.url);
  axios({
    url: 'http://localhost:3005' + req.url,
    method: req.method,
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log('err'));
});

app.all('/*', (req, res, next) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe' + req.url,
    headers: {
      Authorization: config.TOKEN
    },
    method: req.method,
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log('err'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});