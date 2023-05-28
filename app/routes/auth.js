// Requite the controller folder to render the sign-in and sign up page
const auth = require("../controllers/auth");

module.exports = function(app) {
 
// Call the sign  in 
    app.post("/auth/signin", auth.signin );

    // Using the sign in, if the data is incorrect pass the errors, if the login is correct then pass the render 
    app.get('/auth/signin', (req, res) => {
        res.render('pages/auth/signin',  {error: false, login: req.session.login});
    });

    // Call the sign up page 
    app.post("/auth/signup", auth.signup );

    // Using the sign up, make the session pul lthe login 
    app.get("/auth/signup", (req, res) => {
       res.render("pages/auth/signup", {login: req.session.login});
    });

    // If the user is signed in, sign out. Render the index page 
    app.get("/auth/signout", (req, res) => {
        req.session.login = false;
       res.render("pages/index", {login: false});
    });

    // index page
    app.get('/', function(req, res) {
        res.render('pages/index',  {login: req.session.login});
    });
  
    // about page
    app.get('/about', function(req, res) {
        res.render('pages/about', {login: req.session.login});
    });
    // profile page
    app.get('/profile', (req, res, next) => {
                 if (req.session.login) next()
                 return;
        }
        , function(req, res) {
        res.render('pages/profile', {login: req.session.login});
    });

  
};