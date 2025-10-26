document.addEventListener('DOMContentLoaded', function() {
    // Inject Google Font
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Create style
    const style = document.createElement('style');
    style.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
        font-family: 'Inter', sans-serif;
        background-color: #121212;
        color: #E0E0E0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .container { text-align: center; }
    h1 {
        font-size: 32px;
        margin-bottom: 20px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    h1 img { height: 40px; width: auto; transform-origin: center; }
    p { font-size: 16px; margin-bottom: 30px; color: #B0B0B0; }
    a button, .lazer-btn {
        background-color: #FF4C6D;
        color: #fff;
        font-weight: 600;
        padding: 15px 40px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        margin-bottom: 15px;
    }
    a button:hover, .lazer-btn:hover {
        background-color: #FF3653;
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    }
    .popup-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.7);
        display: none;
        justify-content: center;
        align-items: center;
    }
    .popup {
        background-color: #1E1E1E;
        padding: 30px 25px;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
    }
    .popup h2 { margin-bottom: 15px; font-size: 22px; }
    .popup p { margin-bottom: 25px; color: #ddd; }
    .popup button {
        margin: 0 10px;
        padding: 10px 20px;
        border-radius: 6px;
        border: none;
        font-weight: 600;
        cursor: pointer;
    }
    #ok-btn { background-color: #FF4C6D; color: #fff; }
    #never-btn { background-color: #555; color: #fff; }
    #ok-btn:hover { background-color: #FF3653; }
    #never-btn:hover { background-color: #777; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; }
    .footer-note { font-size: 12px; color: #888; margin-top: 5px; }
    a.source-link:hover { color: #FF3653; text-decoration: underline; }
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container)







