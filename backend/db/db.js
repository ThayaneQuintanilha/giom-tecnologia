const mysql = require('mysql2/promise');
require('dotenv').config();
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD } = process.env

const connection = mysql.createPool({
  host: MYSQL_HOST || 'giomdb',
  port: 3306,
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: 'giom_tecnologia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;
