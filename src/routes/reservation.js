const express = require("express");
const router = express.Router();

var reserve = require("../core/reservation");


// READ OPERATION - Get Cars
/*
router.get('/:search', (req, res) => {
    /*var query = req.params;
    var msg;

    search = query.search;

    search = JSON.parse(search);
    //console.log(search);

    /*
        msg = loadHead();
        msg += "<body>"
        msg += loadNav();

        // delivery info
        msg += "<div class=\"container\"><!-- center content-->"
        msg += "<div class=\"row\"><div class=\"col s12\"><br><br></div><div class=\"col s12\"><h1 class=\"title\">Book-A-Car</h1></div></div>"
        msg += "<div class=\"row\"><div class=\"input-field col s4\"><label for=\"deladdress\">Delivery Location</label></div>"
        msg += "<div class=\"input-field col s4\"><label for=\"deldate\">Delivery Date</label></div>"
        msg += "<div class=\"input-field col s4\"><label for=\"delreturn\">Delivery Return</label></div></div>"
        msg += "<div class=\"row\"><div class=\"input-field col s4\"><input disabled id=\"deladdress\" type=\"text\" class=\"input-field\" value=\"" + search.location + "\"></div>"
        msg += "<div class=\"input-field col s4\"><input disabled id=\"deldate\" type=\"text\" class=\"input-field\" value=\"" + search.deldate + "\"></div>"
        msg += "<div class=\"input-field col s4\"><input disabled id=\"delreturn\" type=\"text\" class=\"input-field\" value=\"" + search.delreturn + "\"></div></div></div>"
        // end delivery info
    */
// load cars
//reserve.getCars(search, res);
// end load cars
/*  msg += "</body> "
  msg += "</html>"

  res.write(msg);
  res.end();*/
//res.redirect('./reservation.html');

//});

router.get('/', (req, res) => {
    var cars = [];
    var msg;
    /*
        msg = loadHead();
        msg += "<body>"
        msg += loadNav();
        // delivery info
        msg += "<div class=\"container\"><!-- center content-->"
        msg += "<div class=\"row\"><div class=\"col s12\"><br><br></div><div class=\"col s12\"><h1 class=\"title\">Book-A-Car</h1></div></div>"
        msg += "<div class=\"row\"><div class=\"input-field col s4\"><label for=\"deladdress\">Delivery Location</label></div>"
        msg += "<div class=\"input-field col s4\"><label for=\"deldate\">Delivery Date</label></div>"
        msg += "<div class=\"input-field col s4\"><label for=\"delreturn\">Delivery Return</label></div></div>"
        msg += "<div class=\"row\"><div class=\"input-field col s4\"><input disabled id=\"deladdress\" type=\"text\" class=\"input-field\" value=\"" + req.query.location + "\"></div>"
        msg += "<div class=\"input-field col s4\"><input disabled id=\"deldate\" type=\"text\" class=\"input-field\" value=\"" + req.query.deldate + "\"></div>"
        msg += "<div class=\"input-field col s4\"><input disabled id=\"delreturn\" type=\"text\" class=\"input-field\" value=\"" + req.query.delreturn + "\"></div></div></div>"
        // end delivery info
        msg += "</body> "
        msg += "</html>"
        */

    reserve.getCars(req.query, function (err, items) {
        if (err) {
            throw err;
        } else {
            // console.log("Items retrieved: " + JSON.stringify(items));
            for (var i in items) {
                cars.push([i, items[i]]);
            };
            //   console.log(cars);
            res.send(cars);
        };
    });

});

function loadHead() {
    var msg;

    msg = "<!DOCTYPE html><html><head><title>BOOK A CAR</title>";
    msg += "<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script>"
    msg += "<!-- Compiled and minified CSS --><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">"
    msg += "<!-- Compiled and minified JavaScript --> <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"
    msg += "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"> <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/style2.css\">"
    msg += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/w3css.css\">"
    msg += "<script src=\"/env.js\"></script>"
    msg += "</head>"
    return msg;
};

function loadNav() {
    var msg;
    // navigation
    msg = "<nav><div class=\"nav-wrapper #212121 grey darken-4\"><a href=\"#\" class=\"brand-logo\"><img src=\"/content/logo.jpg\"></a>"
    msg += "<ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">"
    msg += "<li><a href=\"/index.html\">Home</a></li>"
    msg += "<li><a href=\"/login.html\">Login</a></li>"
    msg += "<li><a href=\"/signup.html\">Sign Up</a></li>"
    msg += "</ul></div></nav>"
    // end navigation
    return msg;
}


module.exports = router;