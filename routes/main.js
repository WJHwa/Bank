var express = require("express");
var router = express.Router();

const ctrl = require("./home.ctrl");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("main.html");
});
router.get("/user", (req, res, next) => {
  res.render("user.html");
});
router.get("/deposit", (req, res, next) => {
  res.render("deposit.html");
});
router.get("/withdraw", (req, res, next) => {
  res.render("withdraw.html");
});
router.get("/send", (req, res, next) => {
  res.render("send.html");
});

/* POST */
router.post("/user", ctrl.process.register);
router.post("/", ctrl.process.use);
router.post("/deposit", ctrl.process.deposit);
router.post("/withdraw", ctrl.process.withd);
router.post("/send", ctrl.process.send);

module.exports = router;
