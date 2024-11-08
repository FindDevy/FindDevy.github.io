async function fetchProfile() {
    const username = document.getElementById('username').value;
    const profileContainer = document.getElementById('profile-content');
    const errorMessage = document.getElementById('error-message');

    profileContainer.innerHTML = ''; // Clear previous content
    errorMessage.style.display = 'none';

    if (!username) {
        errorMessage.textContent = 'Please enter a username';
        errorMessage.style.display = 'block';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('User not found');

        const user = await response.json();
        displayProfile(user);
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }
}

function displayProfile(user) {
    const profileContainer = document.getElementById('profile-content');
    
    profileContainer.innerHTML = `
        <div class="profile-header">
            <img src="${user.avatar_url}" alt="${user.login}" class="profile-pic" />
            <div>
                <h2>${user.name || user.login}</h2>
                <a href="${user.html_url}" target="_blank" class="profile-badge">View on GitHub</a>
            </div>
        </div>
        <p class="profile-badge">Public Repos: ${user.public_repos}</p>
        <p class="profile-badge">Followers: ${user.followers}</p>
        <button onclick="toggleMoreInfo()">More Info</button>
        <div class="profile-details">
            <p>${user.bio || 'No bio available'}</p>
        </div>
    `;
}

function toggleMoreInfo() {
    const details = document.querySelector('.profile-details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
