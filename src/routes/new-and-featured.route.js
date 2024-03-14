const express = require("express");
const controller = require("../controllers/new-and-featured.controller");
const router = express.Router();

router.get("/new-and-featured", controller.index);
router.post("/new-and-featured", controller.index);

module.exports = router;
