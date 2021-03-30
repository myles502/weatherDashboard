
$(function(){
 
  function fetchCityForecast(city) {
    var openweatherApiKey = "5411c2401f72d7130e304464c4b927a2";
    var url = "api.openweathermap.org/data/2.5/forecast?appid=" + openweatherApiKey;
    url += "&q=" + city ;
    url += "&unit=imperial"
    
    $.ajax({
      url: url,
      method: "GET"
    }).done(function(data) {
       console.log(data);
    })

    
  } 


  $(".form-inline").on("submit",function(event){
   event.preventDefault();
   
   var cityInput = $("#city-input");
   var city = cityInput.val().trim();

   if (city !== "") {
     fetchCityForecast(city);
     cityInput.val("");
   }
  
  });





});
