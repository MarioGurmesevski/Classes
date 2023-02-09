const homeBtn = document.querySelector(".home-btn");
const hourlyBtn = document.querySelector(".hourly-btn");
const aboutBtn = document.querySelector(".about-btn");
const mainEl = document.querySelector(".main");
const apiBtn = document.querySelector(".api-btn");
const dailyContainer = document.querySelector(".daily-container");
const API_URL =
  "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";

function fetchFunction() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => renderHomePage(data));
}
function fetchFunctionHourly() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => renderHourlyPage(data));
}

const renderHomePage = (data) => {
  const date = new Date(data.current.dt * 1000);
  mainEl.innerHTML = "";
  mainEl.innerHTML = `<p>Current date: ${date.toLocaleDateString("fr")}<br> 
  Temperature: ${data.current.temp}<br> 
  Feels like temperature: ${data.current.feels_like}<br> 
  Wind speed: ${data.current.wind_speed}<br> 
  Weather icon:<img src="http://openweathermap.org/img/wn/${
    data.current.weather[0].icon
  }@2x.png" /> <br> Weather description: ${
    data.current.weather[0].description
  }<br> 
  Humidity: ${data.current.humidity}</p>
    `;
  let dailyCardHTML = "";
  for (let el of data.daily) {
    dailyCardHTML += createCards(el);
  }

  mainEl.innerHTML += `<div class="card-container">${dailyCardHTML}</div>`;
};
function createCards(day) {
  return `<div class="daily-card">
  <p>Date:${new Date(day.dt * 1000).toLocaleDateString("fr")}<br> 
  Weather icon:<img src="http://openweathermap.org/img/wn/${
    day.weather[0].icon
  }@2x.png" /> <br> 
  Max/Min Temperature:${day.temp.min}/${day.temp.max}<br> 
  Humidity:${day.humidity}<br> 
  Weather description:${day.weather[0].description}<br> 
  </p>
  </div>`;
}

const renderHourlyPage = (mainEl) => {
  mainEl.innerHTML = "";
  mainEl.innerHTML = `<h1>Welcome to the Hourly page</h1>`;
  let hourlyCardHTML = "";
  for (let el of data.hourly) {
    hourlyCardHTML += createhourlyCards(el);
  }
  mainEl.innerHTML += `<div class="hourly-container">${hourlyCardHTML}</div>`;
};
const renderAboutPage = (mainEl) => {
  mainEl.innerHTML = "";
};

function createhourlyCards(hour) {
  return `<div class="daily-card">
    <p>Hour:${new (hour[0].dt * 1000).toLocaleDateString("fr")}<br> 
    Weather icon:<img src="http://openweathermap.org/img/wn/${
      hour.weather[0].icon
    }@2x.png" /> <br> 
    Temperature:${hour[0].temp}<br> 
    Feels like:${hour[0].feels_like}
    Humidity:${hour[0].humidity}<br> 
    Weather description:${hour[0].weather[0].description}<br> 
    </p>
    </div>`;
}

aboutBtn.addEventListener("click", () => {
  renderAboutPage(mainEl);
});
