let now = new Date();

let lis = document.querySelector("li#now-date");

let hours = now.getHours();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[2];

lis.innerHTML = `${day}  16:00`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let apiKey = "7356760dfce7667d833c342dd69b57a1";
let city = "Chicago";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].main;
  temperatureElement.innerHTML = `${temperature}°C`;
}

let cityName = document.querySelector("#city");
cityName.innerHTML = city;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function search(event) {
  event.preventDefault();
  let searchText = document.querySelector("#search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = searchText.value;
}

let formControl = document.querySelector("#search-form");

formControl.addEventListener("submit", search);

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition);
