 $(document).ready(function () {

     // bind the nav bar
     $('.sidenav').sidenav();


     // bind date pickers
     $('.datepicker').datepicker();

     // bind the search button
     $('#btnSearch').click(function () {

         makeBooking();
     })

 })


 function makeBooking() {
     alert('button clicked')

 }