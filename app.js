// this file serves as the routing file to direct where traffic should go on request.

const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const userRoute = require("./src/routes/user")
require("dotenv").config();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


// serve static content 'web pages'
app.use(express.static(__dirname + '/public'));

app.use('/signup', userRoute);

module.exports = app;