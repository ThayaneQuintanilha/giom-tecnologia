const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'giom_db',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'giom_tecnologia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;