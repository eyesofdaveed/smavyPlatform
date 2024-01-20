const mongoose = require('mongoose');

const ASSIGNMENT_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SUBMITTED: 'SUBMITTED',
};

const { Schema } = mongoose;

const CoursesSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    assignment_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignments',
      }],
    status: {
      type: String,
      enum: Object.values(ASSIGNMENT_STATUS),
      default: ASSIGNMENT_STATUS.NOT_STARTED,
    },
  },
  { timestamps: true, get: time => time.toDateString() },
);

module.exports = mongoose.model('Courses', CoursesSchema);
