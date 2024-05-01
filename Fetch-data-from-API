// Function to fetch weather data from the API
function fetchWeatherData(location) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Call function to update the DOM with weather data
      updateWeatherUI(data);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Function to update the DOM with weather data
function updateWeatherUI(data) {
  // Get necessary data from the API response
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;

  // Select DOM elements to update
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const humidityElement = document.getElementById('humidity');

  // Update the DOM with the retrieved weather data
  temperatureElement.textContent = `${Math.round(temperature)}°C`;
  descriptionElement.textContent = weatherDescription;
  humidityElement.textContent = `${humidity}%`;
}

// Event listener for the search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const locationInput = document.getElementById('location-input');
  const location = locationInput.value.trim();

  if (location !== '') {
    fetchWeatherData(location);
  }
});
