---
layout: default
title: "Devy"
permalink: /
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Devy - GitHub Profile Search</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav>
        <h1>Devy</h1>
        <ul>
            <li><a href="http://finddevy.github.io/">Home</a></li>
            <li><a href="http://finddevy.github.io/about">About</a></li>
        </ul>
    </nav>
    <!-- Main Content -->
    <div class="container">
        <!-- Search Section -->
        <aside class="search-container">
            <input type="text" id="username" placeholder="Enter GitHub Username" />
            <button onclick="fetchProfile()">Search</button>
            <p id="error-message" class="error-message"></p>
        </aside>
         <!-- Profile Display Section -->
        <section id="profile-container">
            <div id="profile-content">
                <p>Search for a GitHub user to see their profile here.</p>
            </div>
        </section>
    </div>
    <script src="script.js"></script>
</body>
</html>

