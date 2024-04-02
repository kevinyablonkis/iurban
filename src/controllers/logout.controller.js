const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;
  delete req.session.data_user;
  res.redirect("/");
};

module.exports = controller;
