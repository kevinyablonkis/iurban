const { Pool } = require("pg");
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
    verificarEmail(email);
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
    verificarUsername(username);
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
      logearVerificacionUsername(usernameLogin);
      logearVerificacionPassword(usernameLogin, passwordLogin);
    }
  );
};

module.exports = {
  handleConnection,
};
