const controller = require("./account.controller");

const controller = {};

controller.index = (req, res) => {
  const contentForm = req.body;
  const data_user = req.session.value;

  console.log(contentForm);

  res.redirect("/shopping");
};

module.exports = controller;
