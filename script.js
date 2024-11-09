let selectedAPI = '';

function selectAPI(api) {
  selectedAPI = api;
  document.getElementById("param").placeholder = api === 'weather' ? 'Enter location (e.g., London)' : 'No parameters needed';
  document.getElementById("response").textContent = "Response will appear here...";
  document.getElementById("request-details").textContent = "Request details will appear here...";

  // Show/hide elements based on the selected API
  if (api === 'weather') {
    document.getElementById("weather-key-container").style.display = "block";
    document.getElementById("key-warning").style.display = "block";
    document.getElementById("joke-type-container").style.display = "none";
  } else if (api === 'joke') {
    document.getElementById("joke-type-container").style.display = "block";
    document.getElementById("weather-key-container").style.display = "none";
    document.getElementById("key-warning").style.display = "none";
  } else {
    document.getElementById("joke-type-container").style.display = "none";
    document.getElementById("weather-key-container").style.display = "none";
    document.getElementById("key-warning").style.display = "none";
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
    const apiKey = document.getElementById("weather-api-key").value;
    if (!apiKey) {
      alert("You must provide an API key for the Weather API.");
      return;
    }
    url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`;
  } else if (selectedAPI === 'joke') {
    const jokeType = document.getElementById("joke-type").value;
    url = `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
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
