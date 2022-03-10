const router = require("express").Router();
const {task }=require("../../controllers/fetch");

router.route("/fetch/:id").get(
    // console.log("11111"),
    task.fetchmodel,

);


module.exports = router;