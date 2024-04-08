const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { MONGODB_URL } = require("../config");

dotenv.config({
  path: ".env",
});

mongoose.connect(MONGODB_URL);

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  plan: {
    monthlyPrice: String,
    resolution: String,
    devicesAtSameTime: String,
  },
});

const User = mongoose.model("users", UserSchema, "users");

module.exports = { User };
