const express = require("express");
const Task = require("../../models/createtaskmodel")
const { validationResult } = require("express-validator");

/** 
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.taskc = async (req, res) => {
    const results = validationResult(req);
    let x = Math.floor((Math.random() * 100) + 1);
    // In case of any validation errors, send a 400 (Bad Request)
    // to the client with an error message
    if (!results.isEmpty()) {
        res.status(400)
            .json({ msg: results.array()[0] });

        return;
    }
    try {
        const tasks = new Task({
            uid: x,
            title: req.body.title,
            description: req.body.description,
            remainder: req.body.remainder ? req.body.remainder : false,

        });
        await tasks.save();
        res.status(200).json(tasks)
        console.log("456", tasks)
        // console.log(Task)

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
    }

}
exports.delete = async (req, res) => {
    const id = await Task.findOne({ uid: req.params.id })
    try {
        if (!id) {
            res.status(404).send({
                message: `Cannot delete it `
            });
        } else {

            res.send({

                message: "Task was deleted successfully!"
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    }
    await id.delete();
};
exports.update = async (req, res) => {
    const idDoc = await Task.findOne({ uid: req.params.id })
    // console.log(id)
    try {
        if (idDoc.remainder===false) {
           await Task.updateOne({_id: idDoc._id}, {$set:{remainder:true}})
        }
        else if (idDoc.remainder===true) {
            await Task.updateOne({_id: idDoc._id}, {$set:{remainder:false}})
         }
         res.status(200).send({
             message:"Updated"
         })
    } 
    catch (err) {
        res.status(500).send({
            message: "Could not update it"
        });
    }
    //   await id.update();
};