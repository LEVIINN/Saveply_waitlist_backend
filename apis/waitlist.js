const express = require("express");
const { waitListrequest } = require("../controllers/userController");

const router = express.Router();

router.post("/", waitListrequest);

module.exports = router;
