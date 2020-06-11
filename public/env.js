 $(document).ready(function () {

     // bind the nav bar
     $('.sidenav').sidenav();


     // bind date pickers
     $('.datepicker').datepicker();

     // bind the search button
     $('#btnSearch').click(function () {

         makeBooking();
     })

     $('#btnLogin').click(function () {
         doLogin();
     })

 })


 function makeBooking() {
     alert('search button clicked');

 }

 function doLogin() {
     alert('login button clicked');
 }