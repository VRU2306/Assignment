const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    // of the task
    title: {
        type: String,
        required: true,
        maxLength: 30
    },

   description: {
        type: String,
        required: true,
        maxLength: 30,
       
    },
}, {
    timestamps: true
});

module.exports = model("Task", taskSchema);