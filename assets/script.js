//var weatherApiRootUrl = 

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
