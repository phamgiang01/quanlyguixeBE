const express = require("express");
const router = express.Router();

const { getAll } = require("../controllers/parameter.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").get(asyncMiddelware(getAll));

module.exports = router;
