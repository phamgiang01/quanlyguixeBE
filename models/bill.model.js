const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    content: {
      type: String,
    },
    money: {
      type: Number,
    },
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bill", billSchema);
