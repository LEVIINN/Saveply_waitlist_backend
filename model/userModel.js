const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Input name"],
  },
  email: {
    type: String,
    required: [true, "Input email"],
    unique: true,
    validate: [validator.isEmail, "Input valid email"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
