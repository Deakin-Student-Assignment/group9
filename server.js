//var express = require('express');
//var app = express();

const http = require('http');
const app = require('./app');
const moment = require('moment');

var port = process.env.VCAP_APP_PORT || 8080;

const server = http.createServer(app);
//app.use(express.static(__dirname + '/public'));

/*app.get("/sayHello", function (req, res) {
    var user_name = req.query.user_name;

    res.end("Hello " + user_name + "!");
});*/

var datetime = moment().format();
server.listen(port);

console.log("SERVER STARTED @:" + datetime + " on PORT: " + port);

require("cf-deployment-tracker-client").track();