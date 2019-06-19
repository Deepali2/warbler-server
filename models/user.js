const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt');//bcrypt library is going to be used for passport hashing(take a plain text passport and turn it into something that cannot be reversed)

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  }
});

const User = mongoose.Model('User', userSchema);

module.exports = User;

