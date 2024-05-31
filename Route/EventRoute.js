const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authmiddleware");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  fetchAllEvents,
  fetchEventByName,
} = require("../Controller/EventController");

router.post("/create", createEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);
router.get("/all", fetchAllEvents);
router.get("/:name", fetchEventByName);

module.exports = router;
