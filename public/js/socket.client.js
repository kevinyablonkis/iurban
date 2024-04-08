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
      const usernameStyle = document.getElementById("username");
      const errorSignupSpace = document.getElementById("errorSignupSpace");

      socket.on("resultadoVerificacionEmail", (emailRegistrado) => {
        if (emailRegistrado == true) {
          errorEmail.style.display = "flex";
          errorSignupSpace.style.display = "none";
          emailStyle.style.border = "2px red solid";
          resolve(emailRegistrado);
        } else if (emailRegistrado == 2) {
          errorEmail.style.display = "none";
          errorSignupSpace.style.display = "flex";
          usernameStyle.style.border = "2px red solid";
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
      const emailStyle = document.getElementById("email");
      const usernameStyle = document.getElementById("username");
      const errorSignupSpace = document.getElementById("errorSignupSpace");

      socket.on("resultadoVerificacionUsername", (usernameRegistrado) => {
        if (usernameRegistrado == true) {
          errorUsername.style.display = "flex";
          errorSignupSpace.style.display = "none";
          usernameStyle.style.border = "2px red solid";
          resolve(usernameRegistrado);
        } else if (usernameRegistrado == 2) {
          errorUsername.style.display = "none";
          errorSignupSpace.style.display = "flex";
          usernameStyle.style.border = "2px red solid";
          emailStyle.style.border = "2px red solid";
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
      errorSignupSpace.style.display = "none";
      signupContainer.style.height = "700px";
      form.submit();
    } else if (email == 2 || username == 2) {
      errorSignupSpace.style.display = "flex";
    } else {
      errorSignupSpace.style.display = "none";
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
      const passwordLogin = document.getElementById("passwordLogin");
      const errorLoginSpace = document.getElementById("errorLoginSpace");

      socket.on("resultadoLogearVerificacionUsername", (usernameRegistrado) => {
        if (usernameRegistrado == false) {
          errorUsernameLogin.style.display = "flex";
          errorLoginSpace.style.display = "none";
          usernameLogin.style.border = "2px red solid";
          resolve(usernameRegistrado);
        } else if (usernameRegistrado == 2) {
          errorUsernameLogin.style.display = "none";
          errorLoginSpace.style.display = "flex";
          usernameLogin.style.border = "2px red solid";
          passwordLogin.style.border = "2px red solid";
        } else {
          errorUsernameLogin.style.display = "none";
          errorLoginSpace.style.display = "none";
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
      const errorLoginSpace = document.getElementById("errorLoginSpace");

      socket.on(
        "resultadoLogearVerificacionPassword",
        (passwordCorrecta, data) => {
          if (passwordCorrecta == false) {
            errorPasswordLogin.style.display = "flex";
            errorLoginSpace.style.display = "none";
            passwordLogin.style.border = "2px red solid";
            const valor = { passwordCorrecta, data };
            resolve(valor);
          } else if (passwordCorrecta == 2) {
            errorPasswordLogin.style.display = "none";
            errorLoginSpace.style.display = "flex";
            usernameLogin.style.border = "2px red solid";
            passwordLogin.style.border = "2px red solid";
          } else {
            errorPasswordLogin.style.display = "none";
            errorLoginSpace.style.display = "none";
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
    const Password = await logearSmallPassword();

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

const f = document.getElementById("");

// SEE ORDER

const stocks = document.querySelectorAll(".stock");
const order = document.getElementById("order");

const Clothing = [
  "Hoodie-W",
  "Hoodie",
  "Leggins",
  "Pullover",
  "Short-A",
  "Short-B",
  "Sweatpants",
  "Top-A",
  "Top-Sport",
  "T-Shirt",
  "T-Shirt-Over",
  "T-Shirt-Woman",
  "Jeans",
  "Short-Jeans",
];

const Accessories = [
  "Watch-Digital-2",
  "Watch-Digital-1",
  "Watch-Classic",
  "Watch-Elegant",
  "Cap",
];

const Shoes = ["Simple-Shoes"];

if (stocks) {
  for (const stock of stocks) {
    stock.addEventListener("click", () => {
      const ListClassStock = stock.classList;
      const nameModel = stock.classList[1];
      const shadow = document.querySelector(".shadow");
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      shadow.style.display = "flex";

      if (Clothing.includes(nameModel)) {
        stock.className += " Clothing";
      } else if (Accessories.includes(nameModel)) {
        stock.className += " Accessories";
      } else if (Shoes.includes(nameModel)) {
        stock.className += " Shoes";
      }

      const typeModel = stock.classList[2];

      socket.emit("dataEncapsulationForOrder", typeModel, nameModel);
    });
  }

  socket.on("productForAddedToCard", async (productToOrder) => {
    // VISIBLE CONTENT
    const PModel = document.getElementById("PModel");
    const PTypeProduct = document.getElementById("PTypeProduct");
    const SColors = document.getElementById("SColors");
    const SSize = document.getElementById("SSize");
    const PPrice = document.getElementById("PPrice");
    const PImg = document.getElementById("PImg");
    // INPUT CONTENT
    const IModel = document.getElementById("IModel");
    const ITypeProduct = document.getElementById("ITypeProduct");
    const IPrice = document.getElementById("IPrice");

    PModel.innerHTML = productToOrder.model;
    IModel.value = productToOrder.model;
    PTypeProduct.innerHTML = productToOrder.type_product_id;
    ITypeProduct.value = productToOrder.type_product_id;

    const option = document.querySelectorAll(".option");

    if (option) {
      for (let i = 0; i < option.length; i++) {
        SColors.remove(option[i]);
        SSize.remove(option[i]);
      }
    }

    for (let i = 0; i < productToOrder.type_color.length; i++) {
      const element = productToOrder.type_color[i];
      SColors.innerHTML += `<option class="option" value="${element}">${element}</option>`;
    }

    const orderInfoSizes = document.getElementById("orderInfoSizes");

    if (productToOrder.type_size != undefined) {
      orderInfoSizes.style.display = "flex";

      for (let i = 0; i < productToOrder.type_size.length; i++) {
        const element = productToOrder.type_size[i];
        SSize.innerHTML += `<option class="option" value="${element}">${element}</option>`;
      }
    } else {
      orderInfoSizes.style.display = "none";
    }

    PPrice.innerHTML = `$${productToOrder.price}`;
    IPrice.value = productToOrder.price;
    PImg.src = `../assets/img/${productToOrder.img[0]}`;
    PImg.alt = productToOrder.img[0];

    order.style.display = "flex";
  });
}
