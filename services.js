// SERVICES

weatherApp.service("cityService", function() {

  var self = this;
  this.city = 'Livermore, CA';

});

weatherApp.service("weatherService", ["$resource", function($resource) {
  
  this.GetWeather = function(city, days) {
    var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily?APPID=c7dec5e338f9541ba14eed842a7c4482", { callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }})

    return weatherAPI.get({ q: city, cnt: days });
  };
}]);