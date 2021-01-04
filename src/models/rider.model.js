const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riderSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  phoneNumber: {
    type: String,
  },
  flwSubAccount: {
    type: Object,
    required: [true, "SubAccount is required"],
  },
  assigned: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("riders", riderSchema);
