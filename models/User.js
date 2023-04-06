const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    minlength: 5,
  },
  password: {
    type: String,
    minlength: 5,
  },
  token: {
    type: String,
  },
  toeknExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
