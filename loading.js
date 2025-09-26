// loadingScreen.js
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#121212';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.color = '#E0E0E0';
    overlay.style.fontFamily = 'Inter, sans-serif';
    
    // Title
    const titleText = document.createElement('h1');
    titleText.textContent = 'osu! downloader';
    titleText.style.fontSize = '36px';
    titleText.style.marginBottom = '20px';
    overlay.appendChild(titleText);

    // Animated loading text
    const loadingText = document.createElement('h2');
    loadingText.textContent = 'Loading...';
    loadingText.style.fontSize = '28px';
    loadingText.style.marginBottom = '10px';
    overlay.appendChild(loadingText);

    const loadingStates = ['Loading...', 'Loading..', 'Loading.', 'Loading..'];
    let loadingIndex = 0;
    const loadingInterval = setInterval(() => {
        loadingText.textContent = loadingStates[loadingIndex];
        loadingIndex = (loadingIndex + 1) % loadingStates.length;
    }, 1000); // change every 1 second

    // Subtext for verification steps
    const subText = document.createElement('p');
    subText.textContent = 'Verifying...';
    subText.style.fontSize = '18px';
    subText.style.color = '#B0B0B0';
    overlay.appendChild(subText);

    // Append overlay to body
    document.body.appendChild(overlay);

    // Change subtext over time
    setTimeout(() => { subText.textContent = 'Checking images..'; }, 3000); // after 3 seconds
    setTimeout(() => { subText.textContent = 'Checking Connection..'; }, 4000); // 1 second after previous
    setTimeout(() => { subText.textContent = 'Loading Finished!'; }, 12000); // 3 seconds before fade out

    // Hide overlay after 15 seconds
    setTimeout(() => {
        clearInterval(loadingInterval); // stop loading animation
        overlay.style.transition = 'opacity 0.5s ease';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
    }, 15000);
});
