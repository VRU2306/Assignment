require('dotenv').config();
const express=require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const task=require("./routes/task")
const fetchtask=require("./routes/fetch")
const subtask=require("./routes/subtasks")
// // Database Connection
mongoose.connect('', { useNewUrlParser: true , useUnifiedTopology: true}  , (err) => {
                    if (!err) { console.log('MongoDB Connection Succeeded.') }
                    else { console.log('Error in DB connection : ' + err) }
                });

const app=express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:4200",
    credentials: true
}));
app.use("/task",task.taskRouter)
app.use("/tasks",fetchtask.taskRouter)
app.use("/subtask",subtask.taskRouters)
// console.log(task.taskRouter)
app.all("/");
const port=process.env.PORT||9632
app.listen(port,console.log("Server connected to port 9632"))
