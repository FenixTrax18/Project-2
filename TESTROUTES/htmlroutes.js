var path = require(“path”);


module.exports = function(app) {
    app.get(“/”, function(req,res){
        res.sendFile(path.join(_dirname, “public\ TESTROUTES\ notification.js”));
    });
};
// DO I need to add more to this. This is just to load the HTML page: