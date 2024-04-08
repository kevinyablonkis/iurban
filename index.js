const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");

const socketIo = require("socket.io");
const path = require("path");
const http = require("http");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(flash());

app.use(
  session({
    secret: "iurban-session",
    resave: false,
    saveUninitialized: true,
  })
);

// GLOBAL VARIABLE

app.use((req, res, next) => {
  app.locals.message = req.flash("data_user");
  next();
});

app.use(express.static(path.join(__dirname, "./public")));

const socketIO = require("./src/socket/socket.server");
io.on("connection", socketIO.handleConnection);

// PATH

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
app.use(require("./src/routes/addcart.route"));

server.listen(3000, () => {
  console.log("Server listening...");
});

module.exports = { io };
