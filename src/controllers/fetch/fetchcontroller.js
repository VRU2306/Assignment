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
    const results = validationResult(req);

    // In case of any validation errors, send a 400 (Bad Request)
    // to the client with an error message
    if (!results.isEmpty()) {
        res.status(400)
            .json({ msg: results.array()[0].msg });

        return;
    }
    try {
        filter = {};
        // If an ID is supplied through the chapter parameter, fetch the single
        // chapter by ID and send it to the client
        if (req.query.tasks) {
            filter._id = { $in: req.query.tasks.split(',') };

            const chapters = await Task.find(filter);
            if (!chapters) {
                res.sendStatus(404);

                return;

            }
            console.log("456",chapters)
            res.status(200).json(chapters);
            return;
        }
        
     
    
        res.status(400)
            .json({ msg: "No search parameters provided" });

    } catch (e) {
        // In case of an internal server error, log the error and send
        // a 500 (Internal Server Error) to the client
        console.error(e);
        res.sendStatus(500);
    }
}
