const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const auth = require("../Middlewares/Auth");

router.get("/auth/me", auth, userController.getUserInfo);
router.post("/auth/register", userController.registerUser);
router.post("/auth/login", userController.loginUser);

module.exports = router;
