const mongoose = require("mongoose");

const LOCAL_DB =
  `mongodb://0.0.0.0:27017/saveply` || `mongodb://localhost:27017/saveply`;

const connectDB = async () => {
  try {
    await mongoose.connect(LOCAL_DB);
    console.log("Connected to SavePly db");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
