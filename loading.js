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
    titleText.textContent = 'Open Source osu! Downloader.';
    titleText.style.fontSize = '36px';
    titleText.style.marginBottom = '20px';
    overlay.appendChild(titleText);

    // Animated loading text
    const loadingText = document.createElement('h2');
    loadingText.textContent = 'Loading...';
    loadingText.style.fontSize = '28px';
    loadingText.style.marginBottom = '10px';
    overlay.appendChild(loadingText);

    const loadingStates = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let loadingIndex = 0;
    setInterval(() => {
        loadingText.textContent = loadingStates[loadingIndex];
        loadingIndex = (loadingIndex + 1) % loadingStates.length;
    }, 500); // change every 0.5 second

    // Subtext for verification steps
    const subText = document.createElement('p');
    subText.textContent = 'Verifying...';
    subText.style.fontSize = '18px';
    subText.style.color = '#B0B0B0';
    overlay.appendChild(subText);

    // Append overlay to body
    document.body.appendChild(overlay);

    // change subtext over time
    setTimeout(() => {
        subText.textContent = 'Checking Images...';
    }, 0); // instantly

    setTimeout(() => {
        // now start "Running Scripts..." forever
        let dots = 0;
        setInterval(() => {
            dots = (dots + 1) % 4; // cycles between 0–3 dots
            subText.textContent = 'Running Scripts' + '.'.repeat(dots);
        }, 500); // every half second
    }, 2000); // switch after 2s
});
