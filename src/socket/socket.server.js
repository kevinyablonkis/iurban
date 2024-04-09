const { Pool } = require("pg");
const crypto = require("crypto");
const io = require("../../index");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "iurban",
  password: "12345",
  port: 5432,
});

const handleConnection = (socket) => {
  console.log("Un cliente se ha conectado");

  const verificarEmail = (email) => {
    pool.query(
      "SELECT Email FROM Users WHERE Email = $1",
      [`${email}`],
      (err, result) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          if (result.rows.length >= 1) {
            let emailRegistrado = true;
            socket.emit("resultadoVerificacionEmail", emailRegistrado);
          } else {
            let emailRegistrado = false;
            socket.emit("resultadoVerificacionEmail", emailRegistrado);
          }
        }
      }
    );
  };

  socket.on("verificarEmail", (email) => {
    if (!/\s/.test(email)) {
      verificarEmail(email);
    } else {
      let emailRegistrado = 2;
      socket.emit("resultadoVerificacionEmail", emailRegistrado);
    }
  });

  const verificarUsername = (username) => {
    pool.query(
      "SELECT Username FROM Users WHERE Username = $1",
      [`${username}`],
      (err, result) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          if (result.rows.length >= 1) {
            let usernameRegistrado = true;
            socket.emit("resultadoVerificacionUsername", usernameRegistrado);
          } else {
            let usernameRegistrado = false;
            socket.emit("resultadoVerificacionUsername", usernameRegistrado);
          }
        }
      }
    );
  };

  socket.on("verificarUsername", (username) => {
    if (!/\s/.test(username)) {
      verificarUsername(username);
    } else {
      let usernameRegistrado = 2;
      socket.emit("resultadoVerificacionUsername", usernameRegistrado);
    }
  });

  const logearVerificacionUsername = (usernameLogin) => {
    pool.query(
      "SELECT Username FROM Users WHERE Username = $1",
      [`${usernameLogin}`],
      (err, result) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          if (result.rows.length >= 1) {
            let usernameRegistrado = true;
            socket.emit(
              "resultadoLogearVerificacionUsername",
              usernameRegistrado
            );
          } else {
            let usernameRegistrado = false;
            socket.emit(
              "resultadoLogearVerificacionUsername",
              usernameRegistrado
            );
          }
        }
      }
    );
  };

  const logearVerificacionPassword = (usernameLogin, passwordLogin) => {
    pool.query(
      "SELECT * FROM Users WHERE Username = $1 AND Pass_Word = $2",
      [`${usernameLogin}`, `${passwordLogin}`],
      (err, result) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          if (result.rows.length >= 1) {
            let passwordCorrecta = true;

            const data = result.rows[0];

            socket.emit(
              "resultadoLogearVerificacionPassword",
              passwordCorrecta,
              data
            );
          } else {
            let passwordCorrecta = false;
            socket.emit(
              "resultadoLogearVerificacionPassword",
              passwordCorrecta
            );
          }
        }
      }
    );
  };

  socket.on(
    "logearVerificacionUsernameAndPassword",
    (usernameLogin, passwordLogin) => {
      if (!/\s/.test(usernameLogin) && !/\s/.test(passwordLogin)) {
        logearVerificacionUsername(usernameLogin);
        logearVerificacionPassword(usernameLogin, passwordLogin);
      } else {
        let passwordCorrecta = 2;
        socket.emit("resultadoLogearVerificacionPassword", passwordCorrecta);

        let usernameRegistrado = 2;
        socket.emit("resultadoLogearVerificacionUsername", usernameRegistrado);
      }
    }
  );

  // FUNCTION DATA ENCAPSULATION FOR ORDER

  const dataEncapsulationForOrder = (typeModel, nameModel) => {
    const Accessories =
      "SELECT	Model,(SELECT Type_Product FROM Type_Products WHERE Accessories.Type_Product_ID = Type_Product_ID) as Type_Product_ID, (SELECT Type_Color FROM Type_Color WHERE Accessories.Type_Color_ID = Type_Color_ID) as Type_Color, Price, Img FROM Accessories WHERE Model = $1";

    const Clothing =
      "SELECT	Model,(SELECT Type_Product FROM Type_Products WHERE Clothing.Type_Product_ID = Type_Product_ID) as Type_Product_ID, (SELECT Type_Color FROM Type_Color WHERE Clothing.Type_Color_ID = Type_Color_ID) as Type_Color, (SELECT Type_Size FROM Size_Clothing WHERE Clothing.Size_Clothing_ID = Size_Clothing_ID) as Type_Size, Price, Img FROM Clothing WHERE Model = $1";

    const Shoes =
      "SELECT	Model,(SELECT Type_Product FROM Type_Products WHERE Shoes.Type_Product_ID = Type_Product_ID) as Type_Product_ID, (SELECT Type_Color FROM Type_Color WHERE Shoes.Type_Color_ID = Type_Color_ID) as Type_Color, (SELECT Type_Size FROM Size_Shoes WHERE Shoes.Size_Shoes_ID = Size_Shoes_ID) as Type_Size, Price, Img FROM Shoes WHERE Model = $1";

    let SQL = "";

    if (typeModel === "Accessories") {
      SQL = Accessories;
    } else if (typeModel === "Clothing") {
      SQL = Clothing;
    } else if (typeModel === "Shoes") {
      SQL = Shoes;
    }

    pool.query(SQL, [`${nameModel}`], (err, result) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        const productToOrder = {};
        for (const row of result.rows) {
          for (const [key, value] of Object.entries(row)) {
            if (!productToOrder[key]) {
              productToOrder[key] = [];
            }
            productToOrder[key].push(value);
          }
        }

        for (let i = 0; i < Object.values(productToOrder).length; i++) {
          const productToOrderValues = Object.values(productToOrder)[i];
          const conjunt = new Set(productToOrderValues);
          const productToOrderValuesUnique = Array.from(conjunt);
          productToOrder[Object.keys(productToOrder)[i]] =
            productToOrderValuesUnique;
        }

        function generarId() {
          return crypto.randomUUID();
        }

        productToOrder["id"] = generarId();

        socket.emit("productForAddedToCard", productToOrder);
      }
    });
  };

  socket.on("dataEncapsulationForOrder", async (typeModel, nameModel) => {
    // AQUI VA UNA VALIDACION
    await dataEncapsulationForOrder(typeModel, nameModel);
  });
};

module.exports = {
  handleConnection,
};
