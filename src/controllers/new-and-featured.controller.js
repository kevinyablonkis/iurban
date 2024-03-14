const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;

  let contentForm = req.body || {};
  let contentFormType = Object.keys(contentForm);
  let contentFormTypeKeys = Object.keys(contentForm);
  let contentFormTypeLength = Object.keys(contentForm).length;

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
            res.render("new-and-featured", {
              data_user,
              register,
              // contentFormTypeLength,
              // product: contentFormTypeKeys[0],
              // typeProduct: contentFormTypeKeys[1],
            })
          );
        }
      });
    });
  };

  let params = [];
  let sql =
    "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Price >= 10 ORDER BY Model,random() LIMIT 3;";
  doingQuery(sql, params);
};

module.exports = controller;
