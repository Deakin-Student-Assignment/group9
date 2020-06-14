var express = require('express');
var app = express();

var db = require("../config/db/cars");

// INITIALISES & OPENS A DATABASE CONNECTION TO THE USER DB
db.open(function (callback) {

    if (error) {
        return error;
        console.log("Database already connected");
    }

});

exports.getCars = function (req, callback) {
    var cars;
    try {
        db.getCars(function (error, result) {
            if (error) {
                throw error;
            } else {
                cars = result;
            }

            return callback(null, cars);
        });

    } catch (error) {
        throw error;
    };

};