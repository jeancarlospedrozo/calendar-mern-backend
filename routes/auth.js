const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validar-jwt");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe de ser de 8 caracteres").isLength({
      min: 8,
    }),
    validateFields,
  ],
  createUser
);
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe de ser de 8 caracteres").isLength({
      min: 8,
    }),
    validateFields,
  ],
  loginUser
);
router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
