//define functions here

$(document).ready(function(){
getIt()
frameIt()
// call functions here


});

function getIt(){
  $( "p" ).click(function() {
  alert( "Hey!" );
});
}

 function frameIt(){
   $('img').on('load', function(){
    $( this ).addClass( "tasty" );
   }
 });
 }