 $(document).ready(function () {
     var label = 'What is your name?'
     $('#lblName').text(label)

     // bind submit button
     $('#submit').click(function () {

         var name = $('#name').val()


         $('#lblName').val('')
         $('#name').val("Hello " + name)
     })
 });