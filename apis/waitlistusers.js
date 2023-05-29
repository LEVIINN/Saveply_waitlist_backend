const express = require("express");
const { getWaitListrequest } = require("../controllers/userController");

const router = express.Router();

router.get("/", getWaitListrequest);

module.exports = router;
