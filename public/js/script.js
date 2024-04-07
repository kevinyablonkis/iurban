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
  let scrollButton = document.querySelector(".scroll_button");
  let indice = document.getElementById("indice");
  let url = window.location.href;

  if (
    url.includes("login") ||
    url.includes("signup") ||
    url.includes("account")
  ) {
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
    document.body.style.overflow = "hidden";
  });

  btnUserIconClose.addEventListener("click", () => {
    dataUser.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

// BUTTON OF CAR SHOPPING

const carShoppingIcon = document.getElementById("carShoppingIcon");
const carShoppingContainer = document.getElementById("carShoppingContainer");
const btnUserIconCloseCar = document.getElementById("btnUserIconCloseCar");

if (carShoppingIcon) {
  carShoppingIcon.addEventListener("click", () => {
    carShoppingContainer.style.transform = "translateX(0%)";
    document.body.style.overflow = "hidden";
  });

  btnUserIconCloseCar.addEventListener("click", () => {
    carShoppingContainer.style.transform = "translateX(100%)";
    document.body.style.overflow = "auto";
  });
}

// CLOSE ORDER

const btnUserIconCloseOrder = document.getElementById("btnUserIconCloseOrder");
const shadow = document.querySelector(".shadow");

if (btnUserIconCloseOrder) {
  btnUserIconCloseOrder.addEventListener("click", () => {
    order.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    shadow.style.display = "none";
  });
}

// CHANGE IMG ORDER

const PImg = document.getElementById("PImg");
const IImg = document.getElementById("IImg");
const SColors = document.getElementById("SColors");

const colors = {
  1: "Red",
  2: "Blue",
  3: "Black",
  4: "Grey",
  5: "White",
  6: "Green",
  7: "Sky Blue",
  8: "Purple",
  9: "Violet",
  10: "Pink",
  11: "Dark Blue",
  12: "Apple Green",
  13: "Orange",
  14: "Turquoise",
  15: "Yellow",
  16: "Brown",
};

if (SColors) {
  const changeImg = () => {
    const valueToSearch = SColors.value;

    let valueMatch = null;

    for (const match in colors) {
      if (colors[match] === valueToSearch) {
        valueMatch = match;
        break;
      }
    }

    let pathImg = PImg.src;
    let altImg = PImg.alt;

    altImg = altImg.replace(/\d+/g, valueMatch);

    // Creamos una expresión regular para obtener la ruta relativa
    const expresionRegular = /http:\/\/localhost:3000\/(.*)/;

    const rutaRelativa = expresionRegular.exec(pathImg)[1];

    const rutaFinal = `../${rutaRelativa}`;

    const img = rutaFinal.split("/")[3];

    let newImg = img.replace(/\d+/g, valueMatch);

    let pathImgNew = rutaFinal.replace(img, newImg);

    PImg.src = pathImgNew;
    IImg.value = altImg;

    return altImg;
  };

  SColors.addEventListener("change", () => {
    changeImg();
  });

  const btnOrder = document.getElementById("btnOrder");
  const orderInfo = document.getElementById("orderInfo");

  orderInfo.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btnOrder.addEventListener("click", () => {
    let altImg = changeImg();
    IImg.value = altImg;
    console.log(altImg);
    orderInfo.submit();
  });
}

// FILTER SHOPPING

const stocks = document.querySelectorAll(".stock");
const BProductsSearch = document.getElementById("BProductsSearch");

if (stocks) {
  BProductsSearch.addEventListener("click", () => {
    const IProductsSearch = document.getElementById("IProductsSearch").value;

    stocks.forEach((stock) => {
      let stockClass = stock.classList[1].toLowerCase();
      if (!(stockClass === IProductsSearch)) {
        stock.style.display = "none";
      } else {
        stock.style.display = "flex";
      }
    });
  });
}
