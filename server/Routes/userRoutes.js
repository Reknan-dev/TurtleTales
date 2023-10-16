const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const auth = require("../Middlewares/Auth");

router.get("/get-user-info", auth, userController.getUserInfo);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
