const API_KEY = config.OPENWEATHERMAP_API_KEY; // API key for OpenWeatherMap

const searchBtn = document.getElementById("searchBtn"); // Get the search button element
const cityInput = document.getElementById("cityInput"); // Get the city input field element
const weatherInfo = document.getElementById("weatherInfo"); // Get the weather info display element
const weatherChartCanvas = document.getElementById("weatherChart"); // Get the canvas element for the weather chart
let weatherChart = null; // Initialize the weather chart variable

// Add a click event listener to the search button
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim(); // Get the trimmed value of the city input
  if (city) { // Check if the city input is not empty
    fetchWeatherData(city); // Fetch weather data for the entered city
  }
});

/*
 * Function to fetch weather data for a given city.
 * This function retrieves both the current weather data
 * and the 5-day forecast data from the OpenWeatherMap API.
 * It then displays the current weather and plots a forecast chart.
 */
async function fetchWeatherData(city) {
  try {
    // Fetch current weather data from OpenWeatherMap API
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );
    const currentData = await currentRes.json(); // Parse the current weather data as JSON

    // Fetch 5-day forecast data from OpenWeatherMap API
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastRes.json(); // Parse the forecast data as JSON

    if (currentData.cod !== 200) { // Check if the API response is not successful
      throw new Error(currentData.message); // Throw an error with the API message
    }

    displayCurrentWeather(currentData); // Display the current weather data
    plotForecastChart(forecastData.list); // Plot the forecast chart
  } catch (err) {
    weatherInfo.innerHTML = `<p class="error">⚠️ ${err.message}</p>`; // Display the error message
    if (weatherChart) weatherChart.destroy(); // Destroy the existing chart if it exists
  }
}

/*
 * Function to display current weather data.
 * This function takes the weather data object as input,
 * extracts relevant details such as city name, temperature,
 * weather condition, and icon, and updates the DOM to display
 * the current weather information.
 */
function displayCurrentWeather(data) {
  const { name, main, weather } = data; // Destructure the weather data
  const temp = main.temp.toFixed(1); // Get the temperature and format it to 1 decimal place
  const description = weather[0].description; // Get the weather description
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // Get the weather icon URL

  // Update the weatherInfo element with the current weather details
  weatherInfo.innerHTML = `
    <h2>${name}</h2> <!-- Display the city name -->
    <p><strong>Temperature:</strong> ${temp}°C</p> <!-- Display the temperature -->
    <p><strong>Condition:</strong> ${description}</p> <!-- Display the weather condition -->
    <img src="${icon}" alt="weather icon" /> <!-- Display the weather icon -->
  `;
}

/*
 * Function to plot the forecast chart.
 * This function takes the forecast data list as input,
 * filters it to get daily data, and uses Chart.js to
 * create a line chart displaying the daily temperatures
 * for the next 5 days.
 */
function plotForecastChart(forecastList) {
  // Filter the forecast data to get daily data (every 8th item) and limit to 5 days
  const dailyData = forecastList.filter((_, i) => i % 8 === 0).slice(0, 5);

  // Map the daily data to get labels (day names) for the chart
  const labels = dailyData.map(item =>
    new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: "short" })
  );
  // Map the daily data to get temperatures for the chart
  const temps = dailyData.map(item => item.main.temp);

  if (weatherChart) { // Check if a chart already exists
    weatherChart.destroy(); // Destroy the existing chart
  }

  /*
   * Create a new line chart using Chart.js
   */
  weatherChart = new Chart(weatherChartCanvas, {
    type: "line", // Set the chart type to line
    data: {
      labels: labels, // Set the labels for the chart
      datasets: [{
        label: "Daily Temperature (°C)", // Set the dataset label
        data: temps, // Set the temperature data for the chart
        fill: true, // Enable filling under the line
        borderColor: "#0288d1", // Set the line color
        backgroundColor: "rgba(2, 136, 209, 0.2)", // Set the fill color
        tension: 0.3, // Set the line tension for smooth curves
        pointRadius: 4 // Set the radius of the data points
      }]
    },
    options: {
      responsive: true, // Make the chart responsive
      plugins: {
        legend: { display: false } // Hide the legend
      },
      scales: {
        y: {
          beginAtZero: false // Do not start the y-axis at zero
        }
      }
    }
  });
}
