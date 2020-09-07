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

function showTimeAndDate() {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthDays = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let now = new Date();
  let day = weekDays[now.getDay()];
  let month = monthDays[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let time = document.querySelector("h1");
  time.innerHTML = `${hour}:${minute}`;

  let fullDate = document.querySelector("h3");
  fullDate.innerHTML = `Today <br/> ${day}, ${month} ${date}, ${year}`;
}
showTimeAndDate();
