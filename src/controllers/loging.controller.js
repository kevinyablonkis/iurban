const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  req.session.value = req.body;

  res.redirect("/");
};

module.exports = controller;
