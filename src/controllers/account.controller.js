const session = require("express-session");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  console.log(req.session);

  res.render("account", data_user);
};

module.exports = controller;
