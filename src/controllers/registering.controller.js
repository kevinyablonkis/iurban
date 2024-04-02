const { query } = require("express");
const session = require("express-session");
const { Pool } = require("pg");

const controller = {};

controller.index = (req, res) => {
  let contentForm = req.body || {};

  req.session.data_user = req.body;
  // req.flash("data_user", req.body); // USING FLASH

  let contentFormTypeValues = Object.values(contentForm);

  const value1 = contentFormTypeValues[0];
  const value2 = contentFormTypeValues[1];
  const value3 = contentFormTypeValues[2];
  const value4 = contentFormTypeValues[3];
  const value5 = contentFormTypeValues[4];

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "iurban",
    password: "12345",
    port: 5432, // Puerto por defecto de PostgreSQL
  });

  let sql =
    "INSERT INTO Users(First_Name,Last_Name,Email,Username,Pass_Word) VALUES ($1,$2,$3,$4,$5);";
  let params = [
    `${value1}`,
    `${value2}`,
    `${value3}`,
    `${value4}`,
    `${value5}`,
  ];

  pool.query(sql, params, (err, result) => {
    if (err) {
      console.error("Error al ejecutar la consulta", err);
    } else {
      let register = result.rows;
      res.redirect("/");
    }
  });
};

module.exports = controller;
