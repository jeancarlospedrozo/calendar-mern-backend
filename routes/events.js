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

const router = Router();

router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/",
  [check("title", "El titulo el obligatorio").not().isEmpty(), validateFields],
  createEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
