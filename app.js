var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mainRouter = require("./routes/main");
var userRouter = require("./routes/main");
var deRouter = require("./routes/main");
var wdRouter = require("./routes/main");
var sendRouter = require("./routes/main");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));

app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/deposit", deRouter);
app.use("/withdraw", wdRouter);
app.use("/send", sendRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// const db = {
//   database: "dev",
//   connectionLimit: 10,
//   host: "192.168.219.108",
//   user: "root",
//   password: "mariadb",
// };

// const dbPool = require("mysql").createPool(db);

// app.post("/api/:alias", async (request, res) => {
//   try {
//     res.send(await req.db(request.params.alias, request.body.param));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

// const req = {
//   async db(alias, param = [], where = "") {
//     return new Promise((resolve, reject) =>
//       dbPool.query(sql[alias].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != "ER_DUP_ENTRY") console.log(error);
//           resolve({
//             error,
//           });
//         } else resolve(rows);
//       })
//     );
//   },
// };

module.exports = app;
