const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    // of the task
    uid:{
        type: Number,
        required: true,
        unique:true
    },
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
    remainder:{
        type: Boolean,
        required: true,
        
    }
}, {
    timestamps: true
});

module.exports = model("Task", taskSchema);