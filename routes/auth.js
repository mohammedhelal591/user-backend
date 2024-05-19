const express = require("express");
const {
  signUp,
  signIn,
  verifyToken,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/verify", verifyToken, (req, res) => {
  res.status(200).json({ message: "Token is valid" });
});

module.exports = router;
