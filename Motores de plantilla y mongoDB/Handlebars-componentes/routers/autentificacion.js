var express = require('express');
var routerAuth = express.Router();

/* GET login page. */
routerAuth.get("/", (req, res) => {
  res.render("login");
});

module.exports = routerAuth;
