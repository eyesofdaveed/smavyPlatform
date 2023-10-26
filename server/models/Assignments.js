const mongoose = require("mongoose");

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
    completed: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model("Assignments", AssignmentsSchema);