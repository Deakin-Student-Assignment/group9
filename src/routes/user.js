const express = require("express");
const router = express.Router();

var user = require("../core/signup");
const {
    json
} = require("body-parser");

// CREATE OPERATION - SIGN UP USER
router.post('/', (req, res) => {

    user.signup(req.body, res);

});



module.exports = router;