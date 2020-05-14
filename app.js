// this file serves as the routing file to direct where traffic should go on request.

const express = require('express');
const app = express();

// serve static content 'web pages'
app.use(express.static(__dirname + '/public'));


module.exports = app;