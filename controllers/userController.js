const User = require("../model/userModel");

const waitListrequest = async (req, res, next) => {
  // get data from the user
  const { name, email } = req.body;

  if (!(name, email)) {
    return res.status(400).json({
      message: "All input fields are required",
    });
  }

  // check if old email exists
  const oldmail = await User.findOne({ email });

  if (oldmail) {
    return res.status(400).json({
      message: "User with this email, already exists",
    });
  }

  try {
    //   try and create the new user
    const newUser = await User.create({
      name: name,
      email: email,
    });

    res.status(200).json({
      message: "User created",
      newUser,
    });
  } catch (err) {
    res.status(400).json({
      message: "An err occured",
      err,
    });
  }

  next();
};

const getWaitListrequest = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      message: "success",
      allUsersAmount: allUsers.length,
      allUsers: allUsers,
    });
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err,
    });
  }
  next();
};

module.exports = { waitListrequest, getWaitListrequest };
