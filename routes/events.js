const { Router } = require("express");
const { validateJWT } = require("../middlewares/validar-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const isDate = require("../helpers/isDate");

const router = Router();

router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "El titulo el obligatorio").not().isEmpty(),
    check("startDate", "La fecha de inicio es obligatorio").custom(isDate),
    check("endDate", "La fecha de finalizacion es obligatoria").custom(isDate),
    validateFields,
  ],
  createEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
