$(function () {
  function renderForecast(data) {
    
    $("#city-name").text(data.city.name);
    var tbody = $("#forecast-table-body").empty();
    var forecastEntry
    for (var i = 0; i < data.list.length; i += 1) {
       forecastEntry = data.list[i];
       var ts = forecastEntry.dt * 1000;
       var date = new Date(ts);
       var weatherIconImg = $("<td>").attr({
         src : "http://openweathermap.org/img/wn" + forecastEntry.weather[0].icon + ".png"
       })
       var weatherIconCell = $("<td>").append(dateCell,weatherIconCell);
       var tempCell = $("<td>").html(Math.round(forecastEntry.main.temp + "&deg; F"));
    
       var tr = $("<tr>").append(dateCell, weatherIconCell, tempCell);
       var month = date.getMonth() + 1;
       var day = date.getDate();
       var hour = date.getHours();
       var minutes = date.getMinutes();
       if (minutes < 2) {
         minutes = "0" + minutes;
       }
       var time = date.toLocaleTimeString();
       var dateCell = $("<td>").append(month + "/" + day, "<br>", hour + ":" + minutes);
       
     var tr = $("<tr>").append(dateCell);
     tbody.append(tr);
    }
    $("#forecast-results").removeClass(".d-none");
  }
  
  
  
  
  
  function fetchCityForecast(city) {
    var openweatherApiKey = "5411c2401f72d7130e304464c4b927a2";
    var url = "https://api.openweathermap.org/data/2.5/forecast?appid=" + openweatherApiKey;
    url += "&q=" + city ;
    url += "&unit=imperial"
    
        $.ajax({
           url: url,
           method: "GET"
        })
          .done(function(data) {
           renderForecast(data);
        })
        .fail(function(request) {
      
          if (request.status === 404) {
            alert("could not find location");
          } else { 
            alert ("could not find location")
          }   
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
