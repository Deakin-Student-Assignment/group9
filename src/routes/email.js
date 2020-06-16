const express = require("express");
const router = express.Router();
const https = require('https');
const email = require('../config/email/');


router.post('/', (req, res) => {

    console.log(req.body);

});
module.exports = router;