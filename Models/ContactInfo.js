const mongoose = require("mongoose");

const contactInfoSchema = mongoose.Schema({
  Email: { type: String, required: true, unique: true, trim: true },
  Phone: { type: String, required: true },
  LinkedInProfile: { type: String, required: true },
  CompanyWebsite: { type: String, required: true },
  OfficeAddress: { type: String, required: true, trim: true },
});

exports.ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);
