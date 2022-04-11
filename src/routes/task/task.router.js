const router = require("express").Router();
const { body } = require("express-validator");
const {tasks }=require("../../controllers/taskcreate");
const taskCreateValidators = [
    // Check to see if a valid title was provided
    body("title")
        .notEmpty()
        .withMessage("Please provide a title")
        .bail()
        .isLength({ max: 30 })
        .withMessage("Title can be a maximum of 30 characters in length"),

    // Check if a course ID is provided
    body("description")
     .notEmpty()
     .withMessage("Please provide a description")
     .bail()
     .isLength({ max:30 })
     .withMessage("Description can be a maximum of 30 characters in length"),
];


router.route("/create").post(
    // console.log("11111"),
    taskCreateValidators,
    tasks.taskc,

);


module.exports = router;