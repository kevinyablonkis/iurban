const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;

  res.render("signup", data_user);
};

module.exports = controller;
