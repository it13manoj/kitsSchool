const  express = require("express");
const { login, create } = require("../controllers/authController.js");
const { authMiddleware } = require("../middleware/auth.js");

const router = express.Router();

router.post("/login", login);
router.post("/create", create);
router.get("/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
