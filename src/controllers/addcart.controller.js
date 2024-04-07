const session = require("express-session");

const controller = {};

controller.index = async (req, res) => {
  const contentForm = req.body;
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  if (!data_cart) {
    req.session.data_cart = [];
    req.session.data_cart[0] = contentForm;
  } else {
    req.session.data_cart.push(contentForm);
  }

  res.redirect("/shopping");
};

module.exports = controller;
