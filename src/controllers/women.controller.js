const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;

  let contentForm = req.body || {};

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "iurban",
    password: "12345",
    port: 5432,
  });

  const doingQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (err, result) => {
        if (err) {
          console.error("Error al ejecutar la consulta", err);
          reject(err);
        } else {
          let register = result.rows;
          resolve(
            res.render("women", {
              data_user,
              data_cart,
              register,
            })
          );
        }
      });
    });
  };

  let params = [];
  let sql =
    "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Gender_ID = 2 ORDER BY Model,random() LIMIT 9;";
  doingQuery(sql, params);
  pool.end();
};

module.exports = controller;
