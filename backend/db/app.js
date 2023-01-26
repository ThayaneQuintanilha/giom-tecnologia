const express = require('express');
const router = require('../routes');
const cors = require('cors');
require('express-async-errors')
const error = require('./error')

const app = express();
app.use(express.json());
app.use(cors());


app.use('/', router);
app.use(error);

module.exports = app;