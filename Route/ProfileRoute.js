const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const {
  FetchProfileDetail,
  FetchProfileDetailsByEmail,
  UpdateProfileDetail,
  MatchProfile,
  AddMentors,
  RemoveMentors,
  MyAllMentors,
  SearchProfile,
} = require("../Controller/ProfileContainer");

const router = express.Router();
router.route("/update/:id").put(UpdateProfileDetail);

router.route("/search").post(SearchProfile);
router.route("/:id").get(protect, FetchProfileDetail);
router.route("/email/:email").get(FetchProfileDetailsByEmail);
router.route("/suggestion/:userId").get(MatchProfile);
router.route("/add-mentors/:userId").post(AddMentors);
router.route("/remove-mentor/:userId").delete(RemoveMentors);
router.route("/my-mentors/:userId").get(MyAllMentors);
module.exports = router;
