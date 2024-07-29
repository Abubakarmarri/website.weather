const apikey = "589bd02e9bb8130f37156a391ed8724f";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
  document.querySelector("#card-2").style.display = "block";
  document.querySelector("#main").style.display = "block";
  
  } else {
    var data = await response.json();

  console.log(data);

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#digree").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/Mist.png";
  }

  document.querySelector("#card-2").style.display = "none";
  document.querySelector("#main").style.display = "block";
  }

}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
