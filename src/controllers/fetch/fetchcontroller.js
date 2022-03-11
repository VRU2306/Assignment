const express = require("express");
const Task=require("../../models/fetchtaskmode")
const { validationResult } = require("express-validator");
/** 
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
 exports.fetchmodel = async (req, res) => {
    // Check for query parameter validation errors
    const Tasks = await Task.find()
    console.log(Tasks)
    return res.json(Tasks)
    
}

exports.getmodel = async (req, res) => {
    // Check for query parameter validation errors
    try{
        const Tasks = await Task.findById(req.params.id) 
        
        const a1 = await Tasks.save()
        res.json(a1)   
        console.log(a1)
    }catch(err){
        res.send('Error')
    }
}

