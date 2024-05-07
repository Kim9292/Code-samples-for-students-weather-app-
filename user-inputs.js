// Get user input
const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location-input');

searchButton.addEventListener('click', function() {
  const location = locationInput.value.trim();

  // Validate user input
  if (location !== '') {
    fetchWeatherData(location);
  } else {
    displayError('Please enter a valid location.');
  }
});

// Display error message
function displayError(message) {
  const errorContainer = document.getElementById('error-container');

  // Clear previous error message
  errorContainer.innerHTML = '';

  // Create error message element
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;

  // Append error message to the container
  errorContainer.appendChild(errorMessage);

  // Show the error container
  errorContainer.style.display = 'block';
}
