//const http = require('http');
var app = require('./app');
const moment = require('moment');

//const port = process.env.port || 8080;

//const server = http.createServer(app);

app.set('port', (process.env.port || 8080));


var datetime = moment().format();

server.listen(port);
console.log("SERVER STARTED @:" + datetime + " listening on PORT: " + port);

require("cf-deployment-tracker-client").track();