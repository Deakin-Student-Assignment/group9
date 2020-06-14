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
    $('#btnSearch').click(function () {
        doSearch();
    })

    // bind the login button
    $('#btnLogin').click(function () {
        doLogin();
    })

    // bind the sign up button
    $('#signup').submit(function (event) {
        event.preventDefault();
        doSignup();
    })

    $('#cars').collapsible();

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
                console.log(message);
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

        //console.log(searchq);
        deladdress = $('#address').val();
        deldate = $('#dpDelivery').datepicker().val();
        delreturn = $('#dpReturn').datepicker().val();
        localStorage.setItem('deladdress', deladdress);
        localStorage.setItem('deldate', deldate);
        localStorage.setItem('delreturn', delreturn);


        //$(location).attr('href', './reservation.html');
        var searchq = {
            location: deladdress,
            deldate: deldate,
            delreturn: delreturn

        };
        //searchq = JSON.stringify(searchq);
        $(location).attr('href', './reservation.html');
        // $.get("/reservation/", searchq);

    };



})

function doLogin() {
    alert('login button clicked');
}

function getStorage() {
    var deladd, deldate, delreturn;

    deladd = localStorage.getItem('deladdress');
    localStorage.removeItem('deladdress');
    deldate = localStorage.getItem('deldate');
    localStorage.removeItem('deldate');
    delreturn = localStorage.getItem('delreturn');
    localStorage.removeItem('delreturn');
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
        for (i = 1; i < data.length; i++) {
            console.log(data[i][1].Image);
            imgurl = "./content/" + data[i][1].Image;
            details = "<p class=\"flow-text\"><b><span class=\"flowtitle\">" + data[i][1].Type + " " + data[i][1].Transmission + "</span></b>";
            details += "<br>" + data[i][1].Make + " " + data[i][1].Model + " or similar.<br>";
            details += data[i][1].Transmission + " Transmission";
            info = "<span class=\"info\"><i class=\"material-icons\">person</i> " + data[i][1].Seats + " seats&nbsp;&nbsp;&nbsp;&nbsp;";
            info += "<img src=\"./content/cardoor.png\" width=\"7%\" height=\"7%\" margin-bottom:\"10px\"> " + data[i][1].Doors + " doors ";
            info += "<br><i class=\"material-icons\">usb</i> <i class=\"material-icons\">bluetooth_audio</i> <i class=\"material-icons\">ac_unit</i></span>";
            cost = "<span class=\"info rate\">A$" + data[i][1].Rate + " per day.</span><br>";
            cost += "<button id=\"btnSelect\" class=\"btn waves-effect waves-light #212121 grey darken-4\" type=\"submit\" name=\"action\">Select<i class=\"material-icons right\">add</i></button>"
            updateDiv(imgurl, details, info, cost);
        };
    });

    var updateDiv = function (url, details, info, cost) {
        $("#spacer").append('</div><div class=\"row\" id=\"carsrow\"><div class=\"col s12\"><div class=\"col s3\"><img src=\"' + url + '\" imgborder=\"1\" heigh=\"75%\" width=\"75%\"></div><div class=\"col s3\">' + details + '</div><div class=\"col s3\">' + info + '</div><div class=\"col s3\">' + cost + '</div></div></div></div>');

    };

};