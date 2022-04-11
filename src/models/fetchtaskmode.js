const { Schema, model } = require('mongoose');

const fetchtaskSchema = new Schema({
    // of the task
    title: {
        type: String,
        required: true,
        maxLength: 30
    },
  
}, {
    timestamps: true
});

module.exports = model("Tasks", fetchtaskSchema);