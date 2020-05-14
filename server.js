var express = require('express');
var app = express();
const moment = require('moment');

app.set('port', (process.env.port || 8080));
app.use(express.static(__dirname + '/public'));

var datetime = moment().format();

console.log("SERVER STARTED @:" + datetime);

require("cf-deployment-tracker-client").track();