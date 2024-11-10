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
    document.getElementById("custom-api-container").style.display = "none";
  } else if (api === 'joke') {
    document.getElementById("joke-type-container").style.display = "block";
    document.getElementById("weather-key-container").style.display = "none";
    document.getElementById("key-warning").style.display = "none";
    document.getElementById("custom-api-container").style.display = "none";
  } else if (api === 'custom') {
    document.getElementById("custom-api-container").style.display = "block";
    document.getElementById("weather-key-container").style.display = "none";
    document.getElementById("key-warning").style.display = "none";
    document.getElementById("joke-type-container").style.display = "none";
  } else {
    document.getElementById("joke-type-container").style.display = "none";
    document.getElementById("weather-key-container").style.display = "none";
    document.getElementById("key-warning").style.display = "none";
    document.getElementById("custom-api-container").style.display = "none";
  }
}

function sendRequest() {
  if (!selectedAPI) {
    alert("Please select an API");
    return;
  }

  let url;
  const param = document.getElementById("param").value;

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
  } else if (selectedAPI === 'catfact') {
    url = 'https://catfact.ninja/fact';
  } else if (selectedAPI === 'dogfact') {
    url = 'https://dog.ceo/api/breeds/image/random';
  } else if (selectedAPI === 'advice') {
    url = 'https://api.adviceslip.com/advice';
  } else if (selectedAPI === 'country') {
    url = 'https://restcountries.com/v3.1/all';
  } else if (selectedAPI === 'trivia') {
    url = 'https://opentdb.com/api.php?amount=1';
  } else if (selectedAPI === 'kanye') {
    url = 'https://api.kanye.rest/';
  } else if (selectedAPI === 'numbers') {
    url = 'http://numbersapi.com/random/trivia';
  } else if (selectedAPI === 'custom') {
    url = document.getElementById("custom-url").value;
    if (!url) {
      alert("Please enter a valid URL for your custom API request.");
      return;
    }
  } else {
    alert("Invalid API selection.");
    return;
  }

  // Update Request Inspector with URL
  document.getElementById("request-details").textContent = `GET ${url}`;

  // Send request to the selected API
  fetch(url)
    .then(response => {
      document.getElementById("request-details").textContent += `\nStatus: ${response.status}`;
      return response.json();
    })
    .then(data => {
      document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("response").textContent = "Error: " + error;
    });
}

function copyToClipboard() {
  const requestDetails = document.getElementById("request-details").textContent;
  navigator.clipboard.writeText(requestDetails).then(() => {
    alert("Request URL copied to clipboard!");
  }, err => {
    alert("Failed to copy text: " + err);
  });
}
