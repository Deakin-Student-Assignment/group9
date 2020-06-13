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

        var searchq = {
            location: $('#address').val(),
            deldate: $('#dpDelivery').datepicker().val(),
            delreturn: $('#dpReturn').datepicker().val()
        };

        //console.log(searchq);
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
};