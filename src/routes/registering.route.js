const express = require("express");
const controller = require("../controllers/registering.controller");
const router = express.Router();

router.get("/signup/registering", controller.index);
router.post("/signup/registering", controller.index);

module.exports = router;
