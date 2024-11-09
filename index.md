---
layout: default
title: "Devy | API Tools"
permalink: /
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Playground</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- Sidebar -->
    <div class="sidebar">
      <h2>API Playground</h2>
      <ul>
        <li onclick="selectAPI('joke')">Joke API</li>
        <li onclick="selectAPI('quote')">Quote API</li>
        <li onclick="selectAPI('weather')">Weather API</li>
      </ul>
    </div>
    <!-- Main Content -->
    <div class="main">
      <h2>Request Builder</h2>
      <div class="request-builder">
        <input type="text" id="param" placeholder="Enter parameters here (e.g., location)">
        <button onclick="sendRequest()">Send Request</button>
      </div>
      <!-- Warning for Weather API -->
      <div id="key-warning" style="display:none; background-color: #f8d7da; color: #721c24; padding: 10px; margin-top: 10px; border-radius: 5px;">
        <strong>Notice:</strong> The Weather API requires your own API key. Please provide one when making a request.
      </div>
      <div class="response-container">
        <div class="response-console">
          <h3>Response Console</h3>
          <pre id="response">Response will appear here...</pre>
        </div>
        <div class="inspector">
          <h3>Request Inspector</h3>
          <pre id="request-details">Request details will appear here...</pre>
        </div>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
