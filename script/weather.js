const weatherContainer = document.querySelector("#weather-container");

const API_KEY = "1fc0baa2ebea097230b24df63ecedc5d";
const LATITUDE_KEY = "latitude";
const LONGITUDE_KEY = "longitude";

const savedLatitude = localStorage.getItem(LATITUDE_KEY);
const savedLongitude = localStorage.getItem(LONGITUDE_KEY);

function getCurrentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const curTemp = Math.round(data.main.temp);
      const feelsLike = Math.round(data.main.feels_like);
      const weatherDesc = data.weather[0].description;
      const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      const iconElem = document.createElement("img");
      iconElem.id = "current-weather-icon";
      iconElem.src = weatherIcon;
      iconElem.title = weatherDesc;
      weatherContainer.appendChild(iconElem);

      const curTempElem = document.createElement("span");
      curTempElem.id = "current-temperature";
      curTempElem.innerText = `${curTemp}°C`;
      curTempElem.title = `체감온도: ${feelsLike}°C`;
      weatherContainer.appendChild(curTempElem);

      const cityElem = document.createElement("div");
      cityElem.id = "city-name";
      cityElem.innerText = cityName;
      weatherContainer.appendChild(cityElem);
    });
}

function getForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  localStorage.setItem(LATITUDE_KEY, latitude);
  localStorage.setItem(LONGITUDE_KEY, longitude);
  getCurrentWeather(latitude, longitude);
}

function onGeoError() {
  alert("Can't get your current position");
}

if (savedLatitude === null || savedLongitude === null) {
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
} else {
  getCurrentWeather(savedLatitude, savedLongitude);
}
