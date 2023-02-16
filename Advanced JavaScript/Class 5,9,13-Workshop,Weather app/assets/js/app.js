const API_URL =
  "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";

function fetchFunction() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => renderHomePage(data));
}

const date = new Date(1674751570 * 1000);

const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const container = document.querySelector(".container");
const hourlyBtn = document.querySelector(".hourly-btn");
const dailyContainer = document.querySelector(".daily-container");

const renderHomePage = (data) => {
  const date = new Date(data.current.dt * 1000);
  container.innerHTML = "";
  dailyContainer.innerHTML = "";
  container.innerHTML = `<div class="daily-card1">
  <p>Current date: ${date.toLocaleDateString("fr")}<br>
  Current temperature: ${data.current.temp} °C<br>
  It feels like: ${data.current.feels_like} °C<br>
  Wind speed: ${data.current.wind_speed}<br>
  Humidity: ${data.current.humidity}<br>
  Weather description: ${data.current.weather[0].description}</p>
  <img src="http://openweathermap.org/img/wn/${
    data.current.weather[0].icon
  }@2x.png"<br><br>
  </div>`;

  let dailyCardHTML = "";
  for (let el of data.daily) {
    dailyCardHTML += createCards(el);
  }

  container.innerHTML += `<div class="card-container">${dailyCardHTML}</div>`;
};

function createCards(day) {
  return `<div class="daily-card"
    <p>Date: ${new Date(day.dt * 1000).toLocaleDateString("fr")}<br>
    Max temperature: ${day.temp.max}°C<br>
    Min temperature: ${day.temp.min}°C<br>
    Humidity: ${day.humidity}<br>
    Weather description: ${day.weather[0].description}<br>
    <img src="http://openweathermap.org/img/wn/${
      day.weather[0].icon
    }@2x.png"<br><br>
    </p>
    </div>`;
}

const renderAboutPage = (container) => {
  container.innerHTML = "";
  dailyContainer.innerHTML = "";
  container.innerHTML = `<h1>Welcome to the about page</h1>`;
};

homeBtn.addEventListener("click", fetchFunction);
aboutBtn.addEventListener("click", () => {
  renderAboutPage(container);
});

const renderHourlyPage = (weatherData) => {
  dailyContainer.innerHTML = "";
  container.innerHTML = "";
  for (let hourlyData of weatherData.hourly) {
    dailyContainer.innerHTML += `<p class="hourly-card">The time is: ${new Date(
      hourlyData.dt * 1000
    ).toLocaleTimeString("fr")}<br>
    Current temperature: ${hourlyData.temp}°C<br>
    Feels like: ${hourlyData.feels_like}°C<br>
    Humidity: ${hourlyData.humidity}<br>
    Weather description: ${hourlyData.weather[0].description}<br>
    <img src="http://openweathermap.org/img/wn/${
      hourlyData.weather[0].icon
    }@2x.png"<br> </p>`;
  }
};

hourlyBtn.addEventListener("click", () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      renderHourlyPage(data);
    });
});