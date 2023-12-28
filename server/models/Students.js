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
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  group: {
    type: String,
    trim: true,
  },
  course: {
    type: String,
    trim: true,
  },
},
{ timestamps: true,
  get: time => time.toDateString() 
});

module.exports = mongoose.model('Students', StudentsSchema);
