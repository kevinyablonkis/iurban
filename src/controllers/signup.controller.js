const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  res.render("signup", (data_user, data_cart));
};

module.exports = controller;
