import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io();

const form = document.getElementById("signup_form");
const button = document.getElementById("btnEmail");
const signupContainer = document.getElementById("signupContainer");

if (form) {
  const verificarEmail = () => {
    const email = document.getElementById("email").value;
    socket.emit("verificarEmail", email);
  };

  const verificarUsername = () => {
    const username = document.getElementById("username").value;
    socket.emit("verificarUsername", username);
  };

  const verificarIgualdadPassword = () => {
    const errorKeys = document.getElementById("errorKeys");
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeatPassword");
    if (password.value === repeatPassword.value) {
      password.style.border = "2px green solid";
      repeatPassword.style.border = "2px green solid";
      errorKeys.style.display = "none";
      return false;
    } else {
      password.style.border = "2px red solid";
      repeatPassword.style.border = "2px red solid";
      errorKeys.style.display = "flex";
      return true;
    }
  };

  const smallEmail = async () => {
    return new Promise((resolve) => {
      const errorEmail = document.getElementById("errorEmail");
      const emailStyle = document.getElementById("email");

      socket.on("resultadoVerificacionEmail", (emailRegistrado) => {
        if (emailRegistrado) {
          errorEmail.style.display = "flex";
          emailStyle.style.border = "2px red solid";
          resolve(emailRegistrado);
        } else {
          errorEmail.style.display = "none";
          emailStyle.style.border = "2px green solid";
          resolve(emailRegistrado);
        }
      });
    });
  };

  const smallUsername = async () => {
    return new Promise((resolve) => {
      const errorUsername = document.getElementById("errorUsername");
      const usernameStyle = document.getElementById("username");

      socket.on("resultadoVerificacionUsername", (usernameRegistrado) => {
        if (usernameRegistrado) {
          errorUsername.style.display = "flex";
          usernameStyle.style.border = "2px red solid";
          resolve(usernameRegistrado);
        } else {
          errorUsername.style.display = "none";
          usernameStyle.style.border = "2px green solid";
          resolve(usernameRegistrado);
        }
      });
    });
  };

  button.addEventListener("click", async () => {
    verificarEmail();
    verificarUsername();
    verificarIgualdadPassword();

    const email = await smallEmail();
    const username = await smallUsername();
    const password = await verificarIgualdadPassword();

    if (password == false && email == false && username == false) {
      signupContainer.style.height = "700px";
      form.submit();
    } else {
      signupContainer.style.height = "800px";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

// LOGEAR

const loginContainer = document.getElementById("loginContainer");
const loginForm = document.getElementById("loginForm");
const btnLogin = document.getElementById("btnLogin");

if (loginForm) {
  const logearVerificacionUsernameAndPassword = () => {
    const usernameLogin = document.getElementById("usernameLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;
    socket.emit(
      "logearVerificacionUsernameAndPassword",
      usernameLogin,
      passwordLogin
    );
  };

  const logearSmallUsername = async () => {
    return new Promise((resolve) => {
      const errorUsernameLogin = document.getElementById("errorUsernameLogin");
      const usernameLogin = document.getElementById("usernameLogin");

      socket.on("resultadoLogearVerificacionUsername", (usernameRegistrado) => {
        if (usernameRegistrado == false) {
          errorUsernameLogin.style.display = "flex";
          usernameLogin.style.border = "2px red solid";
          resolve(usernameRegistrado);
        } else {
          errorUsernameLogin.style.display = "none";
          usernameLogin.style.border = "2px green solid";
          resolve(usernameRegistrado);
        }
      });
    });
  };

  const logearSmallPassword = async () => {
    return new Promise((resolve) => {
      const errorPasswordLogin = document.getElementById("errorPasswordLogin");
      const passwordLogin = document.getElementById("passwordLogin");

      socket.on(
        "resultadoLogearVerificacionPassword",
        (passwordCorrecta, data) => {
          if (passwordCorrecta == false) {
            errorPasswordLogin.style.display = "flex";
            passwordLogin.style.border = "2px red solid";
            const valor = { passwordCorrecta, data };
            resolve(valor);
          } else {
            errorPasswordLogin.style.display = "none";
            passwordLogin.style.border = "2px green solid";
            const valor = { passwordCorrecta, data };
            resolve(valor);
          }
        }
      );
    });
  };

  btnLogin.addEventListener("click", async () => {
    logearVerificacionUsernameAndPassword();

    const Username = await logearSmallUsername();
    const Password = await logearSmallPassword()

    if (Password.passwordCorrecta && Username) {
      loginContainer.style.height = "400px";
      loginForm.submit();
    } else {
      loginContainer.style.height = "500px";
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
