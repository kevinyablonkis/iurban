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

// CHANGE MENU WITH URL

function changeMenuWithURL() {
  let url = window.location.href;
  // http://localhost:3000/ = length 22

  const header = document.getElementById("header");

  if (url.length > 22) {
    header.style.backgroundColor = "#3d679f";
  }
  // if (url.length <= 22) {
  //   header.classList.remove("header_home");
  // }
}

window.addEventListener("load", changeMenuWithURL);

// DO SCROLL UP && SEE INDICE IN PAGE

document.addEventListener("DOMContentLoaded", function () {
  let scrollButton = document.getElementById("scrollButton");
  let indice = document.getElementById("indice");
  let url = window.location.href;

  if (url.includes("login") || url.includes("signup")) {
    indice.style.display = "none"; // Ocultar el elemento
    scrollButton.style.display = "none"; // Ocultar el elemento
  } else {
    indice.style.display = "flex"; // Mostrar el elemento
    scrollButton.style.display = "flex"; // Mostrar el elemento

    window.onscroll = function () {
      // Verifica si la página puede hacer scroll hacia arriba
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };
  }

  // Agrega un evento al botón para hacer scroll hacia arriba
  scrollButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
  });
});

// VER PASSWORD

// BUTTON DATA_USER MENU

const dataUser = document.getElementById("dataUser");
const btnDataUserOpen = document.getElementById("btnDataUserOpen");
const btnDataUserClose = document.getElementById("btnDataUserClose");
const btnUserIconClose = document.getElementById("btnUserIconClose");
const dataUserContainerInfo = document.getElementById("dataUserContainerInfo");
const dataUserOptions = document.getElementById("dataUserOptions");

const btnUser = () => {
  btnDataUserOpen.addEventListener("click", () => {
    dataUser.style.display = "flex";
  });

  btnDataUserClose.addEventListener("click", () => {
    dataUser.style.display = "none";
  });

  btnUserIconClose.addEventListener("click", () => {
    dataUser.style.display = "none";
  });
};
