function displayCity(event) {
  console.log(event);
  event.preventDefault();
  let city = document.querySelector("#find-city").value;
  let apiKey = `95411422750c0e03350b1c829891759b`;
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let units = `imperial`;
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;

  function showCityName() {
    let showCity = document.querySelector("h2");
    showCity.innerHTML = city;
    if (city.length <= 0) {
      alert(`🙊 Oops! You forgot to enter your city.`);
    }
  }
  showCityName();

  function showWeather(response) {
    let defaultTemp = document.querySelector("h4");
    defaultTemp.innerHTML = Math.round(response.data.main.temp) + `°F`;

    console.log(response);
  }
  axios.get(apiUrl).then(showWeather);
}

let searchCity = document.querySelector("#search-city-form");
searchCity.addEventListener("submit", displayCity);
