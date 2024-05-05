const apikey = "5b11206e352ec8f0ab98122b70e0857b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

     if (data.weather[0].main === "Clouds") {
         weathericon.src = "images/clouds.png";
     }
     else if (data.weather[0].main === "Clear") {
         weathericon.src = "images/clear.png";
     }
     else if (data.weather[0].main === "Drizzle") {
         weathericon.src = "images/drizzle.png";
     }
     else if (data.weather[0].main === "Humidity") {
         weathericon.src = "images/humidity.png";
     }
     else if (data.weather[0].main === "Mist") {
         weathericon.src = "images/mist.png";
     }
     else if (data.weather[0].main === "Rain") {
         weathericon.src = "images/rain.png";
     }
     else if (data.weather[0].main === "Snow") {
         weathericon.src = "images/snow.png";
     }
     else if (data.weather[0].main === "Wind") {
         weathericon.src = "images/wind.png";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
 })