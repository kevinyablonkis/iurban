const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  res.render("login", (data_user, data_cart));
};

module.exports = controller;
