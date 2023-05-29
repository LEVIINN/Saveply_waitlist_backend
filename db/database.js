const mongoose = require("mongoose");

const LOCAL_DB =
  `mongodb://0.0.0.0:27017/saveply` || `mongodb://localhost:27017/saveply`;

const DB = `mongodb+srv://Bee:${process.env.DBPASSWORD}@practise-cluster.bx9s68v.mongodb.net/`;

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to SavePly db");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
