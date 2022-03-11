const router = require("express").Router();
const {task }=require("../../controllers/fetch");

router.route("/fetch").get(
    // console.log("11111"),
    task.fetchmodel,

);
router.route("/:id").get(
    task.getmodel
)


module.exports = router;