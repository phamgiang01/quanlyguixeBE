const mongoose = require("mongoose");

const parameterSchema = mongoose.Schema(
  {
    accessTimes: {
      type: Number,
      default: 0,
    },
    revenue: {
      type: Number,
      default: 50000,
    },
    account: {
      type: Number,
      default: 0,
    },
    transport: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("parameter", parameterSchema);
