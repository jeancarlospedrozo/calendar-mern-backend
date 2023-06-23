const { Router } = require("express");
const { validateJWT } = require("../middlewares/validar-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvents,
} = require("../controllers/events");

const router = Router();

router.get("/", validateJWT, getEvents);
router.post("/", validateJWT, createEvent);
router.put("/:id", validateJWT, updateEvent);
router.delete("/:id", validateJWT, deleteEvents);

module.exports = router;
