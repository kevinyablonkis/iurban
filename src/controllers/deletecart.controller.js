const session = require("express-session");

const controller = {};

controller.index = async (req, res) => {
  const contentForm = req.body;
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  const productID = contentForm.id;

  function eliminarElemento(id) {
    const indice = data_cart.findIndex((element) => element.id === id);

    if (indice !== -1) {
      data_cart.splice(indice, 1);
      console.log(`Elemento con ID ${id} eliminado correctamente.`);
    } else {
      console.log(`No se encontró ningún elemento con el ID ${id}.`);
    }
  }

  eliminarElemento(productID);

  res.redirect("/shopping");
};

module.exports = controller;
