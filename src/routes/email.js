const express = require("express");
const router = express.Router();
const https = require('https');
const email = require('../config/email/');


router.post('/', (req, res) => {
    console.log("emailing");
    //console.log(req.body);
    try {
        email.sendEmail(req, function (e) {
            if (e) {
                throw e;
            }
        });
        res.sendStatus(200);
    } catch (err) {
        throw err;
    }


});

module.exports = router;