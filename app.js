// this file serves as the routing file to direct where traffic should go on request.

const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const signupRoute = require("./src/routes/signup");
const resRoute = require("./src/routes/reservation");
const selectRoute = require("./src/routes/selection")
require("dotenv").config();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


// serve static content 'web pages'
app.use(express.static(__dirname + '/public'));

app.use('/signup', signupRoute);
app.use('/reservation', resRoute);
app.use('/selection', selectRoute);

module.exports = app;