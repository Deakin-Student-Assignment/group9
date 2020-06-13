 $(document).ready(function () {

     // bind the nav bar
     $('.sidenav').sidenav();


     // bind date pickers
     $('.datepicker').datepicker();

     // bind the search button
     $('#btnSearch').click(function () {

         doSearch();
     })

     $('#btnLogin').click(function () {
         doLogin();
     })

     /* $('#btnSignup').click(function () {
          var url = "./signup/"
          var fname = $('#first_name').val();
          var sname = $('#surname').val();
          var e = $('#email').val();
          var pwd = $('#password').val();

          var user = {
              _id: e,
              user: {
                  first_name: fname,
                  surname: sname,
                  email: e,
                  password: pwd
              }
          };

          $.post(url, user, function (data) {
              console.log("user is " + JSON.stringify(user));
              console.log(data);
          });
      })*/
     $('#signup').submit(function (event) {
         event.preventDefault();
         doSignup();
     })

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


 })


 function doSearch() {
     alert('search button clicked');

 }

 function doLogin() {
     alert('login button clicked');
 }