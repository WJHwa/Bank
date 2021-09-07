const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  database: "Bank",
  connectionLimit: 10,
  user: "비밀",
  password: "",
  multipleStatements: true,
});

db.connect();

module.exports = db;
