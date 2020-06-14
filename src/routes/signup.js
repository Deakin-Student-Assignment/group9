const express = require("express");
const router = express.Router();

var user = require("../core/signup");

// CREATE OPERATION - SIGN UP USER
router.post('/', (req, res) => {

    user.signup(req.body, res);

});



module.exports = router;