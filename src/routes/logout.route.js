const express = require("express");
const controller = require("../controllers/logout.controller");
const router = express.Router();

router.get("/logout", controller.index);
router.post("/logout", controller.index);

module.exports = router;
