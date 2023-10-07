const ErrorResponse = require("../helpers/ErrorResponse");
const parameterModel = require("../models/parameter.model");
const stacModel = require("../models/statistical.models");
const userModel = require("../models/user.model");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const account = await userModel.countDocuments();
    const transport = await stacModel.countDocuments({ isOut: 0 });
    const newParameter = await parameterModel.findByIdAndUpdate(
      "652161eefb04cec8a0619b9d",
      { account, transport },
      { new: true }
    );

    return res.status(200).json(newParameter);
    } catch (error) {
      console.log(error)
    }
    
  },
};
