const express = require("express");
const controller = require("../controllers/account.controller");
const router = express.Router();

router.post("add-cart", controller.index);

module.exports = router;
