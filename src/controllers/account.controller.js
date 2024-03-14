const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;

  res.render("account", data_user);
};

module.exports = controller;
