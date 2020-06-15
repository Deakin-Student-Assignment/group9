const express = require("express");
const router = express.Router();

var reserve = require("../core/reservation");


// READ OPERATION - Get Cars

router.get('/', (req, res) => {
    var cars = [];
    var msg;

    reserve.getCars(req.query, function (err, items) {
        if (err) {
            throw err;
        } else {
            /*
            for (var i in items) {

                console.log(JSON.stringify(items));
                /*cars.push({
                    items[i]
                });*/



            res.send(items);
        };
    });

});


module.exports = router;