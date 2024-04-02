const { Pool } = require("pg");

const controller = {};

controller.index = async (req, res) => {
  let contentForm = req.body || {};
  let contentFormTypeValues = Object.values(contentForm);

  const username = contentFormTypeValues[0];
  const password = contentFormTypeValues[1];

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "iurban",
    password: "12345",
    port: 5432,
  });

  try {
    const { rows } = await pool.query(
      "SELECT * FROM Users WHERE Username = $1 AND Pass_Word = $2",
      [username, password]
    );

    const data = rows[0];
    req.session.data_user = data;
    res.redirect("/");
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).send("Error interno del servidor");
  } finally {
    pool.end();
  }
};

module.exports = controller;
