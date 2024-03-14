const express = require("express");
const controller = require("../controllers/signup.controller.js");
const router = express.Router();

router.get("/signup", controller.index);
router.post("/signup", controller.index);

module.exports = router;
