const express = require("express");
const controller = require("../controllers/account.controller");
const router = express.Router();

router.get("/account", controller.index);
router.post("/account", controller.index);

module.exports = router;
