const mongoose = require("mongoose");

const startUpSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  Name: { type: String, required: true },
  Logo: { type: String, required: true },
  FounderName: { type: String, required: true },
  CompanyDes: { type: String, required: true, trim: true },
  FoundingYear: { type: Number, required: true },
  NumberOfEmployees: { type: Number, required: true },
  TargetMarket: { type: String, required: true },
  CurrentStage: { type: String, required: true },
  KeyFeatures: { type: String, required: true },
  Inverstors: { type: String, required: true },
  Evaluation: { type: Number, required: true },
  Revenue: { type: Number, required: true },
  ContactInformation: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ContactInfo",
  },
});

exports.StartUp = mongoose.model("StartUp", startUpSchema);
