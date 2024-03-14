const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;
  delete req.session.value;
  res.redirect("/");
};

module.exports = controller;
