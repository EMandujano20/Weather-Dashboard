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

async function getCityWeather(){
    var apiURL = api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={e5235fdc998e76e5565b34ce5b174f5f
    }
}


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
})