const router = require("express").Router();
const { body,query } = require("express-validator");
const {tasks }=require("../../controllers/taskcreate");
const taskCreateValidators = [
    // Check to see if a valid title was provided
    query("id", "id")
    .notEmpty(),
    body("title")
        .notEmpty()
        .withMessage("Please provide a title")
        .bail()
        .isLength({ max: 30 })
        .withMessage("Title can be a maximum of 30 characters in length"),
    
];

router.route(`/createsub/:id`).post(
    // console.log("11111"),
    taskCreateValidators,
    tasks.taskc,

);


module.exports = router;