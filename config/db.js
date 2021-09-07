const mysql = require("mysql");

const db = mysql.createConnection({
  host: "172.30.1.42",
  database: "Bank",
  connectionLimit: 10,
  user: "root",
  password: "mariadb2",
  multipleStatements: true,
});

db.connect();

module.exports = db;
