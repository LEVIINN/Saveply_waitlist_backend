const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { corsOptions } = require("./config/corsOptions");
const { errorLogger } = require("./middleware/errLogger");
const connectDB = require("./db/database");

const app = express();
const secret = process.env;
const PORT = secret.PORT || 8000;

// CORS Enabled middleware
app.use(cors(corsOptions));

// Connect to DB
connectDB();

// Parsing form data middleware
app.use(express.urlencoded({ extended: true }));

// Serve all file
app.use("/waitlistusers", require("./apis/waitlistusers"));
app.use("/waitlist", require("./apis/waitlist"));

// Log all the errors to a file
app.use(errorLogger);

// Run the server
app.listen(PORT, console.log("Listening at PORT", PORT));
