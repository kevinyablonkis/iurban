const express = require("express");
const controller = require("../controllers/shopping.controller");
const router = express.Router();

router.get("/shopping", controller.index);
router.post("/shopping", controller.index);

module.exports = router;
