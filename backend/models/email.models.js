const mongoose = require("mongoose");
const emailSchema = mongoose.Schema({
  campaignName: {
    type: String,
  },
  campaignSubject: {
    type: String,
  },
  campaignBody: {
    type: String,
  },
  campaignFrom: {
    type: String,
  },
  campaignMailids: {
    type: [String],
  },
});
