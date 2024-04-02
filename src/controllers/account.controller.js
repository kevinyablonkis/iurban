const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  res.render("account", data_user);
};

module.exports = controller;
