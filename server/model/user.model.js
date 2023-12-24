const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please Enter unique UserName"],
    unique: [true, "username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please Enter unique email"],
    unique: [true, "email already exists"],
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

module.exports = mongoose.models.User || mongoose.model("User", schema);
