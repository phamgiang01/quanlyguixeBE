const express = require("express");
const router = express.Router();

const {
  cash,
  getAll,
  deleteBillById,
} = require("../controllers/bill.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").post(asyncMiddelware(cash)).get(asyncMiddelware(getAll));

router.route("/:id").delete(asyncMiddelware(deleteBillById));

module.exports = router;
