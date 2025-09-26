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
    h1 img { height: 40px; width: auto; }
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
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Title
    const title = document.createElement('h1');
    title.textContent = 'Download ';
    const img = document.createElement('img');
    img.src = 'https://r1.astrarune.com/osu.png';
    img.alt = 'osu.png';
    title.appendChild(img);
    container.appendChild(title);

    // Paragraph
    const para = document.createElement('p');
    para.textContent = 'Remember, clicking circles is quite important.';
    container.appendChild(para);

    // Stable osu! button
    const stableLink = document.createElement('a');
    stableLink.href = 'https://m1.ppy.sh/r/osu!install.exe';
    stableLink.target = '_blank';
    const stableButton = document.createElement('button');
    stableButton.textContent = 'Download osu!';
    stableLink.appendChild(stableButton);
    container.appendChild(stableLink);

    // Lazer button
    const lazerButton = document.createElement('button');
    lazerButton.className = 'lazer-btn';
    lazerButton.textContent = 'Download Lazer';
    container.appendChild(lazerButton);

    // Footer
    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.textContent = 'osu! downloads might be blocked.';
    container.appendChild(footer);

    const footerNote = document.createElement('div');
    footerNote.className = 'footer-note';
    footerNote.textContent = 'Not for iOS or Android for now.';
    container.appendChild(footerNote);

    // Popup
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.id = 'popup';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const popupTitle = document.createElement('h2');
    popupTitle.textContent = 'WARNING';
    popup.appendChild(popupTitle);

    const popupText = document.createElement('p');
    popupText.textContent = 'Warning, Lazer might be extremely laggy or crash at times. Stable is recommended for low-end devices (PC ONLY)';
    popup.appendChild(popupText);

    const okBtn = document.createElement('button');
    okBtn.id = 'ok-btn';
    okBtn.textContent = 'Ok, I understand.';
    okBtn.onclick = () => {
        window.location.href = 'https://github.com/ppy/osu/releases/latest/download/install.exe';
        popupOverlay.style.display = 'none';
    };
    popup.appendChild(okBtn);

    const neverBtn = document.createElement('button');
    neverBtn.id = 'never-btn';
    neverBtn.textContent = 'Nevermind!';
    neverBtn.onclick = () => {
        window.location.href = 'https://m1.ppy.sh/r/osu!install.exe';
        popupOverlay.style.display = 'none';
    };
    popup.appendChild(neverBtn);

    popupOverlay.appendChild(popup);
    document.body.appendChild(popupOverlay);

    // Show popup on Lazer button click
    lazerButton.onclick = () => {
        popupOverlay.style.display = 'flex';
    };
});


