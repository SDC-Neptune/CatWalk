const express = require('express');
const app = express();
const PORT = 4000;
const config = require('./config.js');
const axios = require('axios');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

<<<<<<< HEAD
app.all('/*', (req, res, next) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe' + req.url,
    method: req.method,
    headers: {
      Authorization: config.TOKEN
    },
    body: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log(err));
=======
let options = {headers: {'Authorization': `${config.TOKEN}`}};

app.get('/api/styles', function (req, res) {

  var productId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`, options)
    .then((styles) => {
      res.json(styles.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get('/api/product', function (req, res) {

  var productId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`, options)
    .then((product) => {
      res.json(product.data);
    })
    .catch((error) => {
      res.json(error);
    });

>>>>>>> 09ab1f8f044a351ea25c3f5b06835eb5b45ee406
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});