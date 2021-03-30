
$(function(){
 
  $(".form-inline").on("submit",function(event){
   event.preventDefault ();
   
   var cityInput = $("#city-input");
   var city = cityInput.val().trim();

   if (city !== "") {
     alert(city);
     cityInput.val("");
   }
  
  });



});



