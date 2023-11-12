const mongoose = require('mongoose');

const { Schema } = mongoose;

const StudentsSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
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
  group: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  pageNumber: {
    type: String,
    required: true,
  },
  pageSize: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Students', StudentsSchema);
