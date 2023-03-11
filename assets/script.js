var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'e5235fdc998e76e5565b34ce5b174f5f';

var searchInput = document.querySelector(".inputValue");
var searchBtn = document.querySelector(".searchBtn");
var currentDate = moment();
var cityDateIcon = document.querySelector(".city-date-icon");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var uvi = document.querySelector(".uvi");
var recentSearches = JSON.parse(localStorage.getItem("recents") || "[]");
var recentContainer = $("#recent");
var inputValue = $("#inputValue");



var searchSubmitHandler = function(event){
    event.preventDefault;

    var city = searchInput.value();
    if (city) {
        getCityWeather(city);
        searchInput.value=""
    } else if (userInput == ""){
        alert("Please enter a city");
    }

};
async function getWeather(city) {
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=e5235fdc998e76e5565b34ce5b174f5f";
                             
    var response = await fetch(apiUrl);
    if (response.ok) {
      var data = await response.json();
      var nameValue = data.name;
      var tempValue = data.main.temp;
      var humidityValue = data.main.humidity;
      var windValue = data.wind.speed;
      console.log(data);
      var lat = data.coord.lon;
      var lon = data.coord.lat;
      await uvIndex(data.coord.lat, data.coord.lon);
      var icon = data.weather[0].icon;

      cityDateIcon.innerHTML =
      nameValue + currentDate.format(" (M/DD/YYYY) ") + icon;
      temp.innerHTML = "Temperature: " + tempValue + " °F";
      humidity.innerHTML = "Humidity: " + humidityValue + "%";
      wind.innerHTML = "Wind Speed: " + windValue + " MPH";
    }};


  
    var response = await fetch(apiUrl);
    if (response.ok) {
      var data = await response.json();
      var nameValue = data.name;
      var tempValue = data.main.temp;
      var humidityValue = data.main.humidity;
      var windValue = data.wind.speed;
      console.log(data);
    };

function setLocalStorage(city){
    if (recentSearches.indexOf(city) === 1 ){
        recentSearches.push(city);
        localStorage.setItem("recent", JSON.stringify(recentSearches));
    }
}

searchBtn.addEventListener("click",()=>{
    var userInput= inputValue.val().trim();
    if (userInput !== ""){
        getCityWeather(searchInput.value);
        renderRecents();
        inputValue.val("");
    } else if (userInput == ""){
        alert('Please enter a city please')
    }
});


