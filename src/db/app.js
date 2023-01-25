const express = require('express');
const router = require('../routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/', router);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// })

module.exports = app;