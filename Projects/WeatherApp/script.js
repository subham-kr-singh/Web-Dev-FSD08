const API_KEY = "c2f04c551f665b0d238cc1b5c10beb57";

const getCity = async () => {
  try {
    const city = document.getElementById("city").value;

    if (city === "") {
      alert("Enter city name");
      return;
    }

    // Geo API

    const geoData = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
    );

    const cityData = await geoData.json();

    if (cityData.length === 0) {
      alert("City not found");
      return;
    }

    const lat = cityData[0].lat;
    const lon = cityData[0].lon;

    // Weather API

    const weatherApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );

    const weatherData = await weatherApi.json();

    console.log(weatherData);

    // Hide Search Box

    document.getElementById("searchBox").classList.add("d-none");

    // Show Weather Box

    document.getElementById("weatherBox").classList.remove("d-none");

    // Update Data

    document.getElementById("cityName").innerText = weatherData.name;

    document.getElementById("mainWeather").innerText =
      weatherData.weather[0].description;

    document.getElementById("temp").innerText =
      Math.round(weatherData.main.temp) + "°C";

    document.getElementById("humidity").innerText =
      weatherData.main.humidity + "%";

    document.getElementById("wind").innerText =
      weatherData.wind.speed + " km/h";

    document.getElementById("pressure").innerText =
      weatherData.main.pressure + " hPa";

    document.getElementById("feels").innerText =
      Math.round(weatherData.main.feels_like) + "°C";

    document.getElementById("visibility").innerText =
      weatherData.visibility / 1000 + " km";

    document.getElementById("clouds").innerText = weatherData.clouds.all + "%";

    // Icon

    const icon = weatherData.weather[0].icon;

    document.getElementById("icon").src =
      `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } catch (error) {
    console.log(error);

    alert("Something went wrong");
  }
};
