const ErrorResponse = require("../helpers/ErrorResponse");
const billModel = require("../models/bill.model");
const parameterModel = require("../models/parameter.model");

module.exports = {
  deleteBillById: async (req, res, next) => {
    let id = req.params.id;
    let bill = await billModel.findByIdAndDelete(id);
    return res.status(200).json(bill);
  },
  getAll: async (req, res, next) => {
    return res
      .status(200)
      .json(
        await billModel
          .find()
          .sort({ createdAt: -1 })
          .populate("customer")
          .limit(5)
      );
  },
  cash: async (req, res, next) => {
    const currentRenevue = await parameterModel.findOne();

    await parameterModel.findByIdAndUpdate("63b9a550f0eeb779d4a61b09", {
      revenue: currentRenevue.revenue + Number(req.body.money),
    });

    bill = await billModel.create(req.body);

    return res.status(201).json(bill);
  },
};
