const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true, trim: true },
  Bio: { type: String, required: true, trim: true },
  Role: { type: String, required: true },
  TotalRevenue: [
    {
      InverstedInCompanies: { type: Number, required: true },
      InvestedMoney: { type: Number, required: true },
      Date: { type: Date, required: true },
    },
  ],
  Image: { type: String, required: true },
  ContactInformation: {
    CompanyEmail: { type: String, required: true, unique: true, trim: true },
    Phone: { type: String, required: true },
    LinkedInProfile: { type: String, required: true },
    CompanyWebsite: { type: String, required: true },
    OfficeAddress: { type: String, required: true, trim: true },
  },
  Experience: { type: String, required: true },
  StartUpDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "StartUp",
  },
});

exports.Profile = mongoose.model("Profile", profileSchema);
