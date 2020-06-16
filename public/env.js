$(document).ready(function () {
    var deladdress, deldate, delreturn;

    // bind the nav bar
    $('.sidenav').sidenav();

    // bind date pickers
    $('#dpDelivery').datepicker({
        format: "dd-mm-yyyy"
    });
    $('#dpReturn').datepicker({
        format: "dd-mm-yyyy"
    });

    // bind the search button
    $('#btnSearch').on("click", function () {
        doSearch();
    });

    // bind the login button
    $('#btnLogin').click(function () {
        doLogin();
    });

    // bind the sign up button
    $('#signup').submit(function (event) {
        event.preventDefault();
        doSignup();
    });


    $('#btnBookit').on("click", function (event) {
        event.preventDefault();
        doBooking();

    });

    function doSignup() {
        var user = {
            _id: $('#email').val(),
            user: {
                first_name: $('#first_name').val(),
                surname: $('#surname').val(),
                email: $('#email').val(),
                password: $('#password').val()
            }
        }

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "./signup",
            data: JSON.stringify(user),
            dataType: 'json',
            success: function (message) {
                var x = document.getElementById("successsign");
                var y = document.getElementById("signup");

                if (x.style.display === "none") {
                    x.style.display = "block";
                    y.style.display = "none";
                } else {
                    x.style.display = "none";
                }
            },
            error: function (e) {
                alert("Error");
                console.log(e);
            }
        });

        resetForm();
    }

    function resetForm() {
        $('#first_name').val("");
        $('#surname').val("");
        $('#email').val("");
        $('#password').val("");
    }

    function doSearch() {

        deladdress = $('#address').val();
        deldate = $('#dpDelivery').datepicker().val();
        delreturn = $('#dpReturn').datepicker().val();
        localStorage.setItem('deladdress', deladdress);
        localStorage.setItem('deldate', deldate);
        localStorage.setItem('delreturn', delreturn);

        $(location).attr('href', './reservation.html');

    };

})

function doLogin() {
    alert('login button clicked');
}

function getReservation() {
    var deladd, deldate, delreturn;

    deladd = localStorage.getItem('deladdress');
    //localStorage.removeItem('deladdress');
    deldate = localStorage.getItem('deldate');
    //localStorage.removeItem('deldate');
    delreturn = localStorage.getItem('delreturn');
    //localStorage.removeItem('delreturn');
    $('#deladdress').val(deladd);
    $('#deldate').val(deldate);
    $('#delreturn').val(delreturn);

    var searchq = {
        location: deladd,
        deldate: deldate,
        delreturn: delreturn

    };

    searchq = JSON.stringify(searchq);
    $.get("/reservation/", searchq, function (data) {
        var imgurl, details, info, cost;

        for (i = 0; i < data.length; i++) {
            imgurl = "./content/" + data[i].Image;
            details = "<p class=\"flow-text\"><b><span class=\"flowtitle\">" + data[i].Type + " " + data[i].Transmission + "</span></b>";
            details += "<br>" + data[i].Make + " " + data[i].Model + " or similar.<br>";
            details += data[i].Transmission + " Transmission";
            info = "<span class=\"info\"><i class=\"material-icons\">person</i> " + data[i].Seats + " seats&nbsp;&nbsp;&nbsp;&nbsp;";
            info += "<img src=\"./content/cardoor.png\" width=\"7%\" height=\"7%\" margin-bottom:\"10px\"> " + data[i].Doors + " doors ";
            info += "<br><i class=\"material-icons\">usb</i> <i class=\"material-icons\">bluetooth_audio</i> <i class=\"material-icons\">ac_unit</i></span>";
            cost = "<span class=\"info rate\">A$" + data[i].Rate + " per day.</span><br>";
            cost += "<button id=\"btnSelect" + [i] + "\" class=\"btn waves-effect waves-light #212121 grey darken-4\" type=\"submit\" name=\"action\">Select<i class=\"material-icons right\">add</i></button>"
            updateDiv(imgurl, details, info, cost);

        };
    });

    var updateDiv = function (url, details, info, cost) {
        $("#spacer").append('</div><div class=\"row\" id=\"carsrow\"><div class=\"col s12\"><div class=\"col s3\"><img src=\"' + url + '\" imgborder=\"1\" heigh=\"75%\" width=\"75%\"></div><div class=\"col s3\">' + details + '</div><div class=\"col s3\">' + info + '</div><div class=\"col s3\">' + cost + '</div></div></div></div></div></body></html>');
    };


};

function doBooking() {

    createBooking();
};

// *********************************************************************************************
// HANDLER FOR SELECT BUTTONS AFTER BEING DYNAMICALLY CREATED
$(document).on("click", "#btnSelect0", function () {
    var searchq;
    searchq = {
        _id: "BAC001"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect1", function () {
    var searchq;

    searchq = {
        _id: "BAC002"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect2", function () {
    var searchq;

    searchq = {
        _id: "BAC003"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect3", function () {
    var searchq;

    searchq = {
        _id: "BAC004"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect4", function () {
    var searchq;

    searchq = {
        _id: "BAC005"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect5", function () {
    var searchq;

    searchq = {
        _id: "BAC006"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect6", function () {
    var searchq;

    searchq = {
        _id: "BAC007"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect7", function () {
    var searchq;

    searchq = {
        _id: "BAC008"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect8", function () {
    var searchq;

    searchq = {
        _id: "BAC009"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect9", function () {
    var searchq;

    searchq = {
        _id: "BAC010"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});

$(document).on("click", "#btnSelect10", function () {
    var searchq;

    searchq = {
        _id: "BAC011"
    }

    $.get("/selection/", searchq, function (data) {
        createWindow(data);
    });
});



// *********************************************************************************************
// FUNCTION: CREATEWINDOW
// PARAMETERS: Data returned from the database, Index of the data to be rendered in the window
function createWindow(data) {
    var newContent, sadd, sdate, sreturn, imgurl;

    sadd = localStorage.getItem('deladdress');
    sdate = localStorage.getItem('deldate');
    sreturn = localStorage.getItem('delreturn');

    imgurl = "./content/" + data[0][1].Image;

    localStorage.setItem("url", imgurl);
    localStorage.setItem("Make", data[0][1].Make);
    localStorage.setItem("Model", data[0][1].Model);
    localStorage.setItem("Transmission", data[0][1].Transmission);
    localStorage.setItem("Rate", data[0][1].Rate);
    localStorage.setItem("Type", data[0][1].Type);
    localStorage.setItem("_id", data[0][1]._id);

    // HEADER CONTENT
    newContent = "<head><title>BOOK A CAR</title><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\" async></script>"
    newContent += "<!-- Compiled and minified CSS --><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" async><!-- Compiled and minified JavaScript -->"
    newContent += "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\" async></script><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style2.css\" async>"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/w3css.css\" async><script src=\"env.js\"></script></head>"

    // BODY CONTENT
    newContent += "<body class=\"body\"><nav><div class=\"nav-wrapper #212121 grey darken-4\"><a href=\"#\" class=\"brand-logo\"><img src=\"./content/logo.jpg\"></a><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">"
    newContent += "<li><a href=\"index.html\">Home</a></li><li><a href=\"login.html\">Login</a></li><li><a href=\"signup.html\">Sign Up</a></li></ul></div></nav>"
    newContent += "<div class=\"container\"><!-- center content--><div class=\"row\"><div class=\"col s12\"><br><br></div><div class=\"col s12\"><h1 class=\"title\">Book-A-Car</h1></div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 flowtitle\">Delivery</div><div class=\"col s3 flowtitle\">Return</div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 white-text\">" + sadd + "</div><div class=\"col s3 white-text\">" + sadd + "</div><div class=\"col s3 white-text\"></div><div class=\"col s3 white-text\"></div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 white-text\">" + sdate + "</div><div class=\"col s3 white-text\">" + sreturn + "</div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><br><br></div></div>"
    newContent += "<div class=\"row\" id=\"bookit\"><div class=\"col s12\"><div class=\"col s5 white-text\"><img src=\"" + imgurl + "\" imgborder=\"1\"></div><div class=\"col s3 white-text\">"
    newContent += "<span class=\"flowtitle white-text\"><b>" + data[0][1].Type + " " + data[0][1].Transmission + "</b></span><br/><br/>" + data[0][1].Make + " " + data[0][1].Model + " or similar.<br/><br/>"
    newContent += "<span class=\"info rate\">A$" + data[0][1].Rate + " per day.</span><br/><br/>"
    newContent += "<button id=\"btnBookit\" class=\"btn waves-effect waves-light #212121 grey darken-4\" type=\"submit\" name=\"action\">Book It<i class=\"material-icons right\">send</i></button></div></div></div>"


    // FOOTER CONTENT
    newContent += "<div class=\"row\"><br/><br/></div><div class=\"row\"><div class=\"footer-copyright\"><div class=\"container center-align\"><span class=\"grey-text text-lighten-4\">Copyright &copy; 2020 Book-A-Car Australia</span></div></div></div></body></html>"
    document.open();
    document.write(newContent);
    document.close();
}


function createBooking() {
    var newContent, sadd, sdate, sreturn, imgurl, _id;

    sadd = localStorage.getItem('deladdress');
    sdate = localStorage.getItem('deldate');
    sreturn = localStorage.getItem('delreturn');

    imgurl = localStorage.getItem("url");
    make = localStorage.getItem("Make");
    model = localStorage.getItem("Model");
    transmission = localStorage.getItem("Transmission");
    rate = localStorage.getItem("Rate");
    type = localStorage.getItem("Type");
    _id = localStorage.getItem("_id");



    // HEADER CONTENT
    newContent = "<head><title>BOOK A CAR</title><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\" async></script>"
    newContent += "<!-- Compiled and minified CSS --><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" async><!-- Compiled and minified JavaScript -->"
    newContent += "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\" async></script><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style2.css\" async>"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/w3css.css\" async><script src=\"env.js\"></script></head>"

    // BODY CONTENT
    newContent += "<body class=\"body\"><nav><div class=\"nav-wrapper #212121 grey darken-4\"><a href=\"#\" class=\"brand-logo\"><img src=\"./content/logo.jpg\"></a><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">"
    newContent += "<li><a href=\"index.html\">Home</a></li><li><a href=\"login.html\">Login</a></li><li><a href=\"signup.html\">Sign Up</a></li></ul></div></nav>"
    newContent += "<div class=\"container\"><!-- center content--><div class=\"row\"><div class=\"col s12\"><br><br></div><div class=\"col s12\"><h1 class=\"title\">Book-A-Car</h1></div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 flowtitle\">Delivery</div><div class=\"col s3 flowtitle\">Return</div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 white-text\">" + sadd + "</div><div class=\"col s3 white-text\">" + sadd + "</div><div class=\"col s3 white-text\"></div><div class=\"col s3 white-text\"></div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 white-text\">" + sdate + "</div><div class=\"col s3 white-text\">" + sreturn + "</div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><br><br></div></div>"
    newContent += "<div class=\"row\" id=\"bookit\"><div class=\"col s12\"><div class=\"col s5 white-text\"><img src=\"" + imgurl + "\" imgborder=\"1\"></div><div class=\"col s3 white-text\">"
    newContent += "<span class=\"flowtitle white-text\"><b>" + type + " " + transmission + "</b></span><br/><br/>" + make + " " + model + " or similar.<br/><br/>"
    newContent += "<span class=\"info rate\">A$" + rate + " per day.</span><br/><br/></div></div></div>"
    newContent += "<HR>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s3 white-text\"><h2>Your Information</h2></div></div></div>"
    newContent += "<div class=\"row\"><div class=\"input-field col s6\"><input id=\"first_name\" type=\"text\" class=\"validate\"><label for=\"first_name\">First Name</label></div><div class=\"input-field col s6\"><input id=\"last_name\" type=\"text\" class=\"validate\"><label for=\"last_name\">Last Name</label></div></div>"
    newContent += "<div class=\"row\"><div class=\"input-field col s6\"><input id=\"email\" type=\"email\" class=\"validate\"><label for=\"email\">Email</label></div><div class=\"input-field col s6\"><input id=\"mobile\" type=\"text\" class=\"validate\"><label for=\"mobile\">Mobile</label></div></div>"
    newContent += "<div class=\"row\"><div class=\"input-field col s6\"><button id=\"btnConfirm\" class=\"btn waves-effect waves-light #212121 grey darken-4\" type=\"submit\" name=\"action\">Confirm Booking<i class=\"material-icons right\">send</i></button></div></div>"

    // FOOTER CONTENT
    newContent += "<div class=\"row\"><br/><br/></div><div class=\"row\"><div class=\"footer-copyright\"><div class=\"container center-align\"><span class=\"grey-text text-lighten-4\">Copyright &copy; 2020 Book-A-Car Australia</span></div></div></div></body></html>"
    document.open();
    document.write(newContent);
    document.close();
}

$(document).on("click", "#btnConfirm", function () {

    saveBooking();



});

function saveBooking() {
    var first, last, email, phone, make, model, _id, start, end, add;

    var booking;

    add = localStorage.getItem('deladdress');
    start = localStorage.getItem('deldate');
    end = localStorage.getItem('delreturn');
    make = localStorage.getItem("Make");
    model = localStorage.getItem("Model");
    transmission = localStorage.getItem("Transmission");
    rate = localStorage.getItem("Rate");
    type = localStorage.getItem("Type");
    _id = localStorage.getItem("_id");

    first = $('#first_name').val();
    last = $('#last_name').val();
    email = $('#email').val();
    phone = $('#mobile').val();

    localStorage.setItem("email", email);

    booking = {
        _id: email,
        delivery: add,
        client: {
            FirstName: first,
            Surname: last,
            email: email,
            phone: phone
        },
        item: {
            id: _id,
            Make: make,
            Model: model
        },
        bookingdate: {
            start: start,
            end: end
        }
    };

    $.ajax({
        type: "POST",
        url: "https://bookingsvc-api.mybluemix.net/",
        crossDomain: true,
        data: JSON.stringify(booking),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (message) {
            sendEmail();
            confirmBooking();
        },
        error: function (e) {
            alert("Error");
            console.log(e);
        }
    });

}

function confirmBooking() {
    var newContent, email;

    email = localStorage.getItem("email");
    sendEmail();
    // HEADER CONTENT
    newContent = "<head><title>BOOK A CAR</title><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\" async></script>"
    newContent += "<!-- Compiled and minified CSS --><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" async><!-- Compiled and minified JavaScript -->"
    newContent += "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\" async></script><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style2.css\" async>"
    newContent += "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/w3css.css\" async><script src=\"env.js\"></script></head>"

    // BODY CONTENT
    newContent += "<body class=\"body\"><nav><div class=\"nav-wrapper #212121 grey darken-4\"><a href=\"#\" class=\"brand-logo\"><img src=\"./content/logo.jpg\"></a><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">"
    newContent += "<li><a href=\"index.html\">Home</a></li><li><a href=\"login.html\">Login</a></li><li><a href=\"signup.html\">Sign Up</a></li></ul></div></nav>"
    newContent += "<div class=\"container\"><!-- center content--><div class=\"row\"><div class=\"col s12\"><br><br></div><div class=\"col s12\"><h1 class=\"title\">Book-A-Car</h1></div></div>"
    newContent += "<div class=\"row\"><div class=\"col s12\"><div class=\"col s12 flowtitle\">Your booking is confirmed.  An email confirmation has been sent to: " + email + " </div>"

    // FOOTER CONTENT
    newContent += "<div class=\"row\"><br/><br/></div><div class=\"row\"><div class=\"footer-copyright\"><div class=\"container center-align\"><span class=\"grey-text text-lighten-4\">Copyright &copy; 2020 Book-A-Car Australia</span></div></div></div></body></html>"
    document.open();
    document.write(newContent);
    document.close();
}

function sendEmail(booking) {
    var first, last, email, phone, make, model, _id, start, end, add;

    var booking;

    add = localStorage.getItem('deladdress');
    start = localStorage.getItem('deldate');
    end = localStorage.getItem('delreturn');
    make = localStorage.getItem("Make");
    model = localStorage.getItem("Model");
    transmission = localStorage.getItem("Transmission");
    rate = localStorage.getItem("Rate");
    type = localStorage.getItem("Type");
    _id = localStorage.getItem("_id");

    first = $('#first_name').val();
    last = $('#last_name').val();
    email = $('#email').val();
    phone = $('#mobile').val();

    localStorage.setItem("email", email);

    booking = {
        _id: email,
        delivery: add,
        client: {
            FirstName: first,
            Surname: last,
            email: email,
            phone: phone
        },
        item: {
            id: _id,
            Make: make,
            Model: model
        },
        bookingdate: {
            start: start,
            end: end
        }
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "./email",
        crossDomain: true,
        data: JSON.stringify(booking),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (message) {
            return;
        },
        error: function (e) {
            //alert("Error");
            console.log(e);
        }
    });
}