const express = require("express");
const router = express.Router();

var reserve = require("../core/reservation");


// READ OPERATION - Get Cars

router.get('/', (req, res) => {
    var cars = [];
    var msg;

    reserve.getCar(req.query, function (err, items) {
        if (err) {
            throw err;
        } else {

            for (var i in items) {
                cars.push([i, items[i]]);
            };
            res.send(cars);
        };
    });

});


module.exports = router;