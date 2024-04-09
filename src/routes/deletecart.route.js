const express = require("express");
const controller = require("../controllers/deletecart.controller");
const router = express.Router();

router.post("/delete-cart", controller.index);

module.exports = router;
