const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if(req.user) {
      return res.redirect("/homepage");
    }
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
    // res.render("homepage");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));

    // res.render("login");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));

    // res.render("signup");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  app.get("/members", (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/weather.html"));
    //res.sendFile(path.join(__dirname, "../public/members.html"));

    res.render("index");
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
