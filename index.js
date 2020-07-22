const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Listen port
app.listen(5000, () => {
  console.log('Server UP on port: ', 5000);
});
