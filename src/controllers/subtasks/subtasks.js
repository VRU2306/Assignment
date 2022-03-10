const express = require("express");
const Task=require("../../models/subtaskmodel")
const { validationResult } = require("express-validator");
/** 
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.taskc=async(req,res) =>{
    const results = validationResult(req);

    // In case of any validation errors, send a 400 (Bad Request)
    // to the client with an error message
    if (!results.isEmpty()) {
        res.status(400)
            .json({ msg: results.array()[0]});

        return;
    }
    try{
        const subtasks = new Task({
            title:  req.body.title,
            description: req.body.description,
        
        });
        await subtasks.save();
        res.status(200).json(subtasks)
        console.log("456",subtasks)
        // console.log(Task)
        
    } catch (error) {
       
        console.log(error);
        res.sendStatus(500);
    }
  
}