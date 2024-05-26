const express = require("express");
const router = express.Router();
const {
  createStartUp,
  updateStartUp,
  deleteStartUp,
  fetchAllStartUps,
  fetchStartUpByID,
} = require("../Controller/StartupController");

router.route("/create").post(createStartUp);
router.route("/update/:id").put(updateStartUp);
router.route("/delete/:id").delete(deleteStartUp);
router.route("/all").get(fetchAllStartUps);
router.route("/:id").get(fetchStartUpByID);

module.exports = router;
