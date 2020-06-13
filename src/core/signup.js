var express = require('express');
var app = express();

var db = require("../config/db");

// INITIALISES & OPENS A DATABASE CONNECTION TO THE USER DB
db.open(function (callback) {

    if (error) {
        return error;
        console.log("Database already connected");
    }

});

exports.signup = function (req, res) {
    var user;
    try {
        db.doInsertOne(req, function (err, result) {
            if (err) {
                throw err;
            } else {
                user = result;
                res.status(200).json({
                    message: "User created."
                });

            }
        });
    } catch (error) {
        throw error;
    }

};