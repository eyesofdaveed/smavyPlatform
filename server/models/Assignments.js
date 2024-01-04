const mongoose = require("mongoose");

const ASSIGNMENT_STATUS = {
    NOT_STARTED: "NOT_STARTED",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
    SUBMITTED: "SUBMITTED",
};


const { Schema } = mongoose;

const AssignmentsSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,  
    },
    deadline: {
        type: Date,
        trim: true,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: Object.values(ASSIGNMENT_STATUS),
        default: ASSIGNMENT_STATUS.NOT_STARTED,
    }
},
{ timestamps: true,
  get: time => time.toDateString() 
});

module.exports = mongoose.model("Assignments", AssignmentsSchema);