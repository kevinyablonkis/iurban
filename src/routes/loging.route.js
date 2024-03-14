const express = require("express");
const controller = require("../controllers/loging.controller");
const router = express.Router();

router.get("/login/loging", controller.index);
router.post("/login/loging", controller.index);

module.exports = router;
