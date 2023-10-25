const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  refreshToken: String,
});

module.exports = mongoose.model('Users', UsersSchema);
