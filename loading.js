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
    
    // Loading text
    const loadingText = document.createElement('h1');
    loadingText.textContent = 'Loading...';
    loadingText.style.fontSize = '32px';
    loadingText.style.marginBottom = '10px';
    overlay.appendChild(loadingText);
    
    // Subtext
    const subText = document.createElement('p');
    subText.textContent = 'Please Wait..';
    subText.style.fontSize = '16px';
    subText.style.color = '#B0B0B0';
    overlay.appendChild(subText);
    
    // Append overlay to body
    document.body.appendChild(overlay);
    
    // Change subtext 5 seconds before fading out (at 10 seconds)
    setTimeout(() => {
        subText.textContent = 'Loading Finished';
    }, 10000); // 10 seconds

    // Hide overlay after 15 seconds
    setTimeout(() => {
        overlay.style.transition = 'opacity 0.5s ease';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500); // remove completely after fade out
    }, 15000);
});
