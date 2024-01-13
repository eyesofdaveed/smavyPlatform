const { Schema, model } = require("mongoose");

const TeachersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  groups: [
    {
      type: String,
      trim: true,
    },
  ],
  courses: [
    {
      type: String,
      trim: true,
    },
  ],
});

module.exports = model('Teachers', TeachersSchema);
