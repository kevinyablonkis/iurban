// CHANGE MENU WITH URL

function changeMenuWithURL() {
  let url = window.location.href;
  // http://localhost:3000/ = length 22

  const header = document.getElementById("header");

  if (url.length > 22) {
    header.style.backgroundColor = "#3d679f";
  }
}

// ENVIAR FORMULARIO

const productsFilters = document.getElementById("productsFilters");

function SendForm() {
  productsFilters.submit();
}

// VALIDAR CHECKBOX

function ValidateCheckbox() {
  const checkboxes = document.getElementById("Option");
  let contadorChecked = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      contadorChecked++;
    }
  });

  if (contadorChecked !== 1) {
    alert("Debe seleccionar exactamente un checkbox.");
    return false;
  }
  return true;
}

// CHECKED INPUT OPTION

const inputChecked1 = document.querySelector(".inputChecked-1");
const inputChecked2 = document.querySelector(".inputChecked-2");

function CheckedInputOption1() {
  inputChecked1.click();
  inputChecked2.checked = false;
}

function CheckedInputOption2() {
  inputChecked2.click();
  inputChecked1.checked = false;
}

window.addEventListener("load", changeMenuWithURL);

// DO SCROLL UP && SEE INDICE IN PAGE

document.addEventListener("DOMContentLoaded", function () {
  let scrollButton = document.getElementById("scrollButton");
  let indice = document.getElementById("indice");
  let url = window.location.href;

  if (url.includes("login") || url.includes("signup")) {
    indice.style.display = "none";
    scrollButton.style.display = "none";
  } else {
    indice.style.display = "flex";
    scrollButton.style.display = "flex";

    window.onscroll = function () {
      // Verifica si la página puede hacer scroll hacia arriba
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        scrollButton.style.display = "flex";
      } else {
        scrollButton.style.display = "none";
      }
    };
  }

  // Evento para hacer scroll hacia arriba
  scrollButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
  });
});

// VER PASSWORD

const passwordVisibility = document.getElementById("passwordVisibility");
const repeatPasswordVisibility = document.getElementById(
  "repeatPasswordVisibility"
);
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

if (password) {
  passwordVisibility.addEventListener("click", () => {
    if (password.classList.contains("visibility")) {
      passwordVisibility.textContent = "visibility";
      password.setAttribute("type", "password");
      password.classList.toggle("visibility");
    } else {
      passwordVisibility.textContent = "visibility_off";
      password.setAttribute("type", "text");
      password.classList.toggle("visibility");
    }
  });

  repeatPasswordVisibility.addEventListener("click", () => {
    if (repeatPassword.classList.contains("visibility")) {
      repeatPasswordVisibility.textContent = "visibility";
      repeatPassword.setAttribute("type", "password");
      repeatPassword.classList.toggle("visibility");
    } else {
      repeatPasswordVisibility.textContent = "visibility_off";
      repeatPassword.setAttribute("type", "text");
      repeatPassword.classList.toggle("visibility");
    }
  });
}

// BUTTON DATA_USER MENU

const dataUser = document.getElementById("dataUser");
const btnDataUserOpen = document.getElementById("btnDataUserOpen");
const btnUserIconClose = document.getElementById("btnUserIconClose");
const dataUserContainerInfo = document.getElementById("dataUserContainerInfo");
const dataUserOptions = document.getElementById("dataUserOptions");

if (btnDataUserOpen) {
  btnDataUserOpen.addEventListener("click", () => {
    dataUser.style.display = "flex";
  });

  btnUserIconClose.addEventListener("click", () => {
    dataUser.style.display = "none";
  });
}

// BUTTON OF CAR SHOPPING

const carShoppingIcon = document.getElementById("carShoppingIcon");
const carShoppingContainer = document.getElementById("carShoppingContainer");
const btnUserIconCloseCar = document.getElementById("btnUserIconCloseCar");

if (carShoppingIcon) {
  carShoppingIcon.addEventListener("click", () => {
    carShoppingContainer.style.transform = "translateX(0%)";
  });

  btnUserIconCloseCar.addEventListener("click", () => {
    carShoppingContainer.style.transform = "translateX(100%)";
  });
}