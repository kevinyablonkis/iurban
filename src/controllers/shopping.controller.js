const { Pool, Query } = require("pg");

const controller = {};

controller.index = (req, res) => {
  const data_user = req.session.value;

  let contentForm = req.body || {};
  let contentFormType = Object.keys(contentForm);
  let contentFormTypeKeys = Object.keys(contentForm);
  let contentFormTypeValues = Object.values(contentForm);
  let contentFormTypeLength = Object.keys(contentForm).length;

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "iurban",
    password: "12345",
    port: 5432, // Puerto por defecto de PostgreSQL
  });

  const doingQuery = (sql, params) => {
    // pool.connect();
    pool.query(sql, params, (err, result) => {
      if (err) {
        console.error("Error al ejecutar la consulta", err);
      } else {
        let register = result.rows;
        res.render("shopping", {
          data_user,
          register,
          contentFormTypeLength,
          product: contentFormTypeKeys[0],
          typeProduct: contentFormTypeKeys[1],
        });
      }
      pool.end();
    });
  };

  const selectProductView = {
    1: "Training Shoes",
    2: "Running Shoes",
    3: "Tops & T-Shirts",
    4: "Shorts",
    5: "Hoodies & Pullovers",
    6: "Joggers & Sweatpants",
    7: "Pants & Leggins",
    8: "Sports Bras",
    9: "Watches",
    10: "Cap",
    11: "All Clothing",
    12: "All Shoes",
    13: "All Accessories",
    14: "Sale Clothing",
    15: "Sale Shoes",
    16: "Sale Accessories",
  };

  function searchMatch(object, value) {
    for (let clave in object) {
      if (object.hasOwnProperty(clave) && object[clave] === value) {
        return clave;
      }
    }
    return null;
  }

  let claveMatch = searchMatch(selectProductView, contentFormType[1]);
  let claveMatchNumber = parseInt(claveMatch);

  let claveMatchTwo = searchMatch(selectProductView, contentFormType[0]);
  let claveMatchNumberTwo = parseInt(claveMatchTwo);

  // FOR ALL

  function useFunctionInparFor(value1, value2) {
    if (contentFormTypeLength == 1) {
      sqlParamsDoingQueryTwo(value1, value2);
    } else {
      sqlParamsDoingQuery(value1, value2);
    }
  }

  function numberClaveMatch(value) {
    if (value == 3) {
      let claveMatch1 = value;
      let claveMatch2 = claveMatch1 + 1;
      useFunctionInparFor(claveMatch1, claveMatch2);
    } else if (value == 5) {
      let claveMatch1 = value + 1;
      let claveMatch2 = claveMatch1 + 1;
      useFunctionInparFor(claveMatch1, claveMatch2);
    } else if (value == 6) {
      let claveMatch1 = value + 2;
      let claveMatch2 = claveMatch1 + 1;
      useFunctionInparFor(claveMatch1, claveMatch2);
    } else if (value == 7) {
      let claveMatch1 = value + 3;
      let claveMatch2 = claveMatch1 + 1;
      useFunctionInparFor(claveMatch1, claveMatch2);
    }
  }

  function sqlParamsDoingQuery(value1, value2) {
    let params = [`${value1}`, `${value2}`, `${contentFormTypeValues[0]}`];
    let sql =
      "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID BETWEEN $1 AND $2 AND Type_Gender_ID = $3 ORDER BY Model,random();";
    doingQuery(sql, params);
  }

  function sqlParamsDoingQueryTwo(value1, value2) {
    let params = [`${value1}`, `${value2}`];
    let sql =
      "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID BETWEEN $1 AND $2 ORDER BY Model,random();";
    doingQuery(sql, params);
  }

  function useFunctionSaleAndAll(value1, value2) {
    if (contentFormTypeLength == 1) {
      sqlParamsSaleProductTwo(value1, value2);
    } else {
      sqlParamsSaleProduct(value1, value2);
    }
  }

  function saleProduct(value) {
    if (value == 14) {
      let claveMatch1 = 3;
      let claveMatch2 = 11;
      useFunctionSaleAndAll(claveMatch1, claveMatch2);
    } else if (value == 15) {
      let claveMatch1 = 1;
      let claveMatch2 = 2;
      useFunctionSaleAndAll(claveMatch1, claveMatch2);
    } else if (value == 16) {
      let claveMatch1 = 13;
      let claveMatch2 = 14;
      useFunctionSaleAndAll(claveMatch1, claveMatch2);
    }
  }

  function sqlParamsSaleProduct(value1, value2) {
    let params = [`${value1}`, `${value2}`, `${contentFormTypeValues[0]}`];
    let sql =
      "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID BETWEEN $1 AND $2 AND Stock > 0 AND Type_Gender_ID = $3 ORDER BY Model,random();";
    doingQuery(sql, params);
  }

  function sqlParamsSaleProductTwo(value1, value2) {
    let params = [`${value1}`, `${value2}`];
    let sql =
      "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID BETWEEN $1 AND $2 AND Stock > 0 ORDER BY Model,random();";
    doingQuery(sql, params);
  }

  function allProduct(value) {
    if (value == 11) {
      let claveMatch1 = 3;
      let claveMatch2 = 11;
      if (contentFormTypeLength == 1) {
        sqlParamsDoingQueryTwo(claveMatch1, claveMatch2);
      } else {
        sqlParamsDoingQuery(claveMatch1, claveMatch2);
      }
    } else if (value == 12) {
      let claveMatch1 = 1;
      let claveMatch2 = 2;
      if (contentFormTypeLength == 1) {
        sqlParamsDoingQueryTwo(claveMatch1, claveMatch2);
      } else {
        sqlParamsDoingQuery(claveMatch1, claveMatch2);
      }
    } else if (value == 13) {
      let claveMatch1 = 13;
      let claveMatch2 = 14;
      if (contentFormTypeLength == 1) {
        sqlParamsDoingQueryTwo(claveMatch1, claveMatch2);
      } else {
        sqlParamsDoingQuery(claveMatch1, claveMatch2);
      }
    }
  }

  let valuesDouble =
    claveMatchNumber == 3 ||
    claveMatchNumber == 5 ||
    claveMatchNumber == 6 ||
    claveMatchNumber == 7 ||
    claveMatchNumberTwo == 3 ||
    claveMatchNumberTwo == 5 ||
    claveMatchNumberTwo == 6 ||
    claveMatchNumberTwo == 7;

  let valuesSimple =
    claveMatchNumber == 8 ||
    claveMatchNumber == 9 ||
    claveMatchNumber == 10 ||
    claveMatchNumberTwo == 8 ||
    claveMatchNumberTwo == 9 ||
    claveMatchNumberTwo == 10;

  let valuesAll =
    claveMatchNumber == 11 ||
    claveMatchNumber == 12 ||
    claveMatchNumber == 13 ||
    claveMatchNumberTwo == 11 ||
    claveMatchNumberTwo == 12 ||
    claveMatchNumberTwo == 13;

  let valuesSale =
    claveMatchNumber == 14 ||
    claveMatchNumber == 15 ||
    claveMatchNumber == 16 ||
    claveMatchNumberTwo == 14 ||
    claveMatchNumberTwo == 15 ||
    claveMatchNumberTwo == 16;

  if (contentFormTypeLength == 0) {
    let sql =
      "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,Price,Img FROM (SELECT Model,Type_Product_ID,Price,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Price,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Price,Img FROM Accessories) AS tablas_combinadas ORDER BY Model,random();";
    let params = [];
    doingQuery(sql, params);
  } else if (contentFormTypeLength == 1) {
    if (valuesDouble) {
      numberClaveMatch(claveMatchNumberTwo);
    } else if (valuesSimple) {
      let claveMatch1 = claveMatchNumberTwo + 4;
      let params = [`${claveMatch1}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 ORDER BY Model,random();";
      doingQuery(sql, params);
    } else if (claveMatchNumberTwo == 4) {
      let claveMatch1 = claveMatchNumberTwo + 1;
      let params = [`${claveMatch1}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 ORDER BY Model,random();";
      doingQuery(sql, params);
    } else if (valuesAll) {
      allProduct(claveMatchNumberTwo);
    } else if (valuesSale) {
      saleProduct(claveMatchNumberTwo);
    } else {
      let params = [`${claveMatchNumberTwo}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 ORDER BY Model,random();";
      doingQuery(sql, params);
    }
  } else if (contentFormTypeLength == 2) {
    if (valuesDouble) {
      numberClaveMatch(claveMatchNumber);
    } else if (valuesSimple) {
      let claveMatch1 = claveMatchNumber + 4;
      let params = [`${claveMatch1}`, `${contentFormTypeValues[0]}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 AND Type_Gender_ID = $2 ORDER BY Model,random();";
      doingQuery(sql, params);
    } else if (claveMatchNumber == 4) {
      let claveMatch1 = claveMatchNumber + 1;
      let params = [`${claveMatch1}`, `${contentFormTypeValues[0]}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 AND Type_Gender_ID = $2 ORDER BY Model,random();";
      doingQuery(sql, params);
    } else if (valuesAll) {
      allProduct(claveMatchNumber);
    } else if (valuesSale) {
      saleProduct(claveMatchNumber);
    } else {
      let params = [`${claveMatchNumber}`, `${contentFormTypeValues[0]}`];
      let sql =
        "SELECT DISTINCT ON (Model) Model,(SELECT Type_Product FROM Type_Products WHERE Type_Product_ID = tablas_combinadas.Type_Product_ID) AS Type_Product_ID,(SELECT Type_Gender FROM Genders WHERE Type_Gender_ID = tablas_combinadas.Type_Gender_ID) AS Type_Gender_ID,Price,Stock,Img FROM (SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Clothing UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Shoes UNION SELECT Model,Type_Product_ID,Type_Gender_ID,Price,Stock,Img FROM Accessories) AS tablas_combinadas WHERE Type_Product_ID = $1 AND Type_Gender_ID = $2 ORDER BY Model,random();";
      doingQuery(sql, params);
    }
  }
};

module.exports = controller;
