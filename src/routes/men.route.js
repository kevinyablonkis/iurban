const express = require("express");
const controller = require("../controllers/men.controller");
const router = express.Router();

router.get("/men", controller.index);
router.post("/men", controller.index);

module.exports = router;
