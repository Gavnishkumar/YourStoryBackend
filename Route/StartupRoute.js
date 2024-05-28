const express = require("express");
const router = express.Router();
const { protect, authorizeUser } = require("../middleware/authmiddleware");
const {
  createStartUp,
  updateStartUp,
  deleteStartUp,
  fetchAllStartUps,
  fetchStartUpByID,
} = require("../Controller/StartupController");
router.route("/create").post(protect, authorizeUser, createStartUp);
router.route("/update/:id").put(protect, authorizeUser, updateStartUp);
router.route("/delete/:id").delete(protect, authorizeUser, deleteStartUp);
router.route("/all").get(fetchAllStartUps);
router.route("/:id").get(fetchStartUpByID);
module.exports = router;
