const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/tasks", require("./tasks"));

console.log("router Loaded");

module.exports = router;
