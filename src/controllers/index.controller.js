const { Pool } = require("pg");

const controller = {};

controller.index = async (req, res) => {
  const data_user = req.session.data_user;
  const data_cart = req.session.data_cart;
  // const data_user = req.flash("data_user")[0]; // USING FLASH

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "iurban",
    password: "12345",
    port: 5432,
  });

  function allQuerys(sql, params, sqlTwo, paramsTwo) {
    const registerPromise = doingQuery(sql, params);
    const registerTwoPromise = doingQueryTwo(sqlTwo, paramsTwo);

    Promise.all([registerPromise, registerTwoPromise])
      .then(([register, registerTwo]) => {
        res.render("index", {
          data_user,
          data_cart,
          register,
          registerTwo,
        });
      })
      .catch((error) => {
        console.error("Error en allQuerys", error);
      });
  }

  const doingQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (err, result) => {
        if (err) {
          console.error("Error al ejecutar la consulta", err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      });
    });
  };

  const doingQueryTwo = (sqlTwo, paramsTwo) => {
    return new Promise((resolve, reject) => {
      pool.query(sqlTwo, paramsTwo, (errTwo, resultTwo) => {
        if (errTwo) {
          console.error("Error al ejecutar la consulta", errTwo);
          reject(errTwo);
        } else {
          resolve(resultTwo.rows);
        }
      });
    });
  };

  let params = [];
  let sql =
    "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas ORDER BY Model,random() LIMIT 9;";

  let paramsTwo = [];
  let sqlTwo =
    "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Price >= 10 ORDER BY Model,random() LIMIT 3;";

  await allQuerys(sql, params, sqlTwo, paramsTwo);
  pool.end();
};

module.exports = controller;
