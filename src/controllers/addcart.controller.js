const controller = {};

controller.index = async (req, res) => {
  const contentForm = req.body;
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  req.session.data_cart = contentForm;

  res.redirect("/shopping");
};

module.exports = controller;
