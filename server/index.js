const express = require('express');
const app = express();
const PORT = 4000;
const config = require('./config.js');
const axios = require('axios');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/api/styles', function (req, res) {

  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }
  };

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19091/styles', options)
    .then((styles) => {
      console.log('styles in server: ', styles.data);
      res.json(styles.data);
    })
    .catch((error) => {
      res.json(error);
    });


});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});