var express = require('express');
const bodyParser = require("body-parser");
const app = express();
var cookieParser = require('cookie-parser');
const session = require('express-session');

// set the view engine to ejs
app.set('view engine', 'ejs');

//parse requests of content-type   application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// session part
app.use(cookieParser());
app.use(session({secret:"this is secret", login: false}));

// route part
require('./app/routes/auth')(app);

app.listen(8080);
console.log('Server is listening on port 8080');