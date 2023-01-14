var express = require('express');
var routerHome = express.Router();

/* GET home page. */
routerHome.get("/", (req, res) => {
  res.render("home", { titulo: "Página de inicio" });
});

module.exports = routerHome;
