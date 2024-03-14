const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const path = require("path");
const { Pool } = require("pg");
const http = require("http");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(flash());

app.use(
  session({
    secret: "iurban-session",
    resave: false,
    saveUninitialized: false,
  })
);

// GLOBAL VARIABLE
app.use((req, res, next) => {
  app.locals.message = req.flash("data_user");
  next();
});

app.use(express.static(path.join(__dirname, "./public")));

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("verificarEmail", (email) => {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "iurban",
      password: "12345",
      port: 5432,
    });

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
  });

  socket.on("verificarUsername", (username) => {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "iurban",
      password: "12345",
      port: 5432,
    });

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
  });

  socket.on("logearVerificacionUsername", (usernameLogin) => {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "iurban",
      password: "12345",
      port: 5432,
    });

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
  });

  socket.on("logearVerificacionPassword", (passwordLogin) => {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "iurban",
      password: "12345",
      port: 5432,
    });

    pool.query(
      "SELECT Pass_Word FROM Users WHERE Pass_Word = $1",
      [`${passwordLogin}`],
      (err, result) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          if (result.rows.length >= 1) {
            let passwordCorrecta = true;
            socket.emit(
              "resultadoLogearVerificacionPassword",
              passwordCorrecta
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
  });
});

app.use(require("./src/routes/index.route"));
app.use(require("./src/routes/men.route"));
app.use(require("./src/routes/women.route"));
app.use(require("./src/routes/shopping.route"));
app.use(require("./src/routes/new-and-featured.route"));
app.use(require("./src/routes/login.route"));
app.use(require("./src/routes/signup.route"));
app.use(require("./src/routes/registering.route"));
app.use(require("./src/routes/loging.route"));
app.use(require("./src/routes/logout.route"));
app.use(require("./src/routes/account.route"));

server.listen(3000, () => {
  console.log("Server listening...");
});
