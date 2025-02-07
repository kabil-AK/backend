const express = require("express");
const {
  forgotPassword,
  resetPassword,
  updatePassword,
} = require("../controllers/authController");
const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.get("/reset-password/:token", resetPassword);
router.post("/update-password", updatePassword);

module.exports = router;
