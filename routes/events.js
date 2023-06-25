const { Router } = require("express");
const { validateJWT } = require("../middlewares/validar-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvents,
} = require("../controllers/events");

const router = Router();

router.use(validateJWT);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvents);

module.exports = router;
