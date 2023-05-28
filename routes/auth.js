const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");

router.post("/new", createUser);
router.post("/", loginUser);
router.get("/renew", revalidateToken);

module.exports = router;
