var express = require(“express”);
var router = express.Router();
// var notification = require(“THIS NEEDS TO BE THE NOTIFICATION JS FILE ROUTE”)
router.get(“/”, function(req,res){
notification.call(function(data) {
    var hsbObject = {
        notification: data
    }
    console.log(hsbObject);
    // Need to reference the right file here, instead of index:
    res.render(“index”, hsbObject);
});
});
router.post(“/api/notifications”, function(req, res) {
    notification.create([“email”, “password”, “notification”], [
            req.body.email,
            req.body.password,
            req.body.notification
        ],
        function(result) {
            res.json({ id: result.insertId });
        });
});
module.exports = router;
// IS THIS THE RIGHT INFORMATION?
// get a put: if the radio post is going on the sign up sheet post, if not put.