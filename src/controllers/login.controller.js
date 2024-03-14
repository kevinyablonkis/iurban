const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;
  res.render("login", data_user);
};

module.exports = controller;
