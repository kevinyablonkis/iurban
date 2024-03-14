const express = require("express");
const controller = require("../controllers/women.controller");
const router = express.Router();

router.get("/women", controller.index);
router.post("/women", controller.index);

module.exports = router;
