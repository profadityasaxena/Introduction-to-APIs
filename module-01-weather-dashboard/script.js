// ✅ Use API key from external config.js (not included in GitHub)
const API_KEY = config.OPENWEATHERMAP_API_KEY;

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const weatherChartCanvas = document.getElementById("weatherChart");
let weatherChart = null;

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
  }
});

async function fetchWeatherData(city) {
  try {
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );
    const currentData = await currentRes.json();

    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastRes.json();

    if (currentData.cod !== 200) {
      throw new Error(currentData.message);
    }

    displayCurrentWeather(currentData);
    plotForecastChart(forecastData.list);
  } catch (err) {
    weatherInfo.innerHTML = `<p class="error">⚠️ ${err.message}</p>`;
    if (weatherChart) weatherChart.destroy();
  }
}

function displayCurrentWeather(data) {
  const { name, main, weather } = data;
  const temp = main.temp.toFixed(1);
  const description = weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Temperature:</strong> ${temp}°C</p>
    <p><strong>Condition:</strong> ${description}</p>
    <img src="${icon}" alt="weather icon" />
  `;
}

function plotForecastChart(forecastList) {
  const dailyData = forecastList.filter((_, i) => i % 8 === 0).slice(0, 5);

  const labels = dailyData.map(item =>
    new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: "short" })
  );
  const temps = dailyData.map(item => item.main.temp);

  if (weatherChart) {
    weatherChart.destroy();
  }

  weatherChart = new Chart(weatherChartCanvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Daily Temperature (°C)",
        data: temps,
        fill: true,
        borderColor: "#0288d1",
        backgroundColor: "rgba(2, 136, 209, 0.2)",
        tension: 0.3,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
