const express = require('express');
const app = express();
const PORT = 4000;
const config = require('./config.js');
const axios = require('axios');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

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

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});