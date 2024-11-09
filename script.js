let selectedAPI = '';

function selectAPI(api) {
  selectedAPI = api;
  document.getElementById("param").placeholder = api === 'weather' ? 'Enter location (e.g., London)' : 'No parameters needed';
  document.getElementById("response").textContent = "Response will appear here...";
  document.getElementById("request-details").textContent = "Request details will appear here...";

  // Notify if the user selects an API that requires a key
  if (api === 'weather') {
    document.getElementById("key-warning").style.display = "block"; // Show API key warning for weather API
  } else {
    document.getElementById("key-warning").style.display = "none"; // Hide warning for other APIs
  }
}

function sendRequest() {
  if (!selectedAPI) {
    alert("Please select an API");
    return;
  }

  let url;
  const param = document.getElementById("param").value;

  // Weather API requires a key
  if (selectedAPI === 'weather') {
    const apiKey = prompt("Please enter your OpenWeatherMap API key");
    if (!apiKey) {
      alert("You must provide an API key for the Weather API.");
      return;
    }
    url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`;
  } else if (selectedAPI === 'joke') {
    url = 'https://official-joke-api.appspot.com/random_joke';
  } else if (selectedAPI === 'quote') {
    url = 'https://api.quotable.io/random';
  } else {
    alert("Invalid API selection.");
    return;
  }

  // Send request to the selected API
  fetch(url)
    .then(response => {
      document.getElementById("request-details").textContent = `GET ${url}\nStatus: ${response.status}`;
      return response.json();
    })
    .then(data => {
      document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("response").textContent = "Error: " + error;
    });
}
