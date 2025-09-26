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
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Title with logo
    const title = document.createElement('h1');
    title.textContent = 'Download ';
    const img = document.createElement('img');
    const defaultSrc = 'https://raw.githubusercontent.com/pypppe/cdn/refs/heads/main/images/osu.png';
    const hoverSrc = 'https://r1.astrarune.com/osu.png';
    img.src = defaultSrc;
    img.alt = 'osu.png';
    img.style.display = 'block';
    img.style.height = '40px';
    img.style.width = 'auto';
    img.style.transformOrigin = 'center';
    title.appendChild(img);
    container.appendChild(title);

    // Hover swap for logo
    img.addEventListener('mouseenter', () => { img.src = hoverSrc; });
    img.addEventListener('mouseleave', () => { img.src = defaultSrc; });

    // Pulse animation: quick grow, slow shrink, wait 0.5s, repeat
    let scaleMin = 0.9;
    let scaleMax = 1.15;
    let phase = 'growing'; // growing, shrinking, waiting
    let lastTime = null;
    let waitStart = null;
    let growDuration = 150; // ms
    let shrinkDuration = 500; // ms
    let waitDuration = 500; // ms

    function pulseLogo(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const delta = timestamp - lastTime;
        lastTime = timestamp;

        let currentScale = parseFloat(img.style.transform.replace(/scale\(|\)/g, '')) || 1;

        if (phase === 'growing') {
            currentScale += (scaleMax - scaleMin) * (delta / growDuration);
            if (currentScale >= scaleMax) {
                currentScale = scaleMax;
                phase = 'shrinking';
            }
        } else if (phase === 'shrinking') {
            currentScale -= (scaleMax - scaleMin) * (delta / shrinkDuration);
            if (currentScale <= scaleMin) {
                currentScale = scaleMin;
                phase = 'waiting';
                waitStart = timestamp;
            }
        } else if (phase === 'waiting') {
            if (timestamp - waitStart >= waitDuration) {
                phase = 'growing';
            }
        }

        img.style.transform = `scale(${currentScale})`;
        requestAnimationFrame(pulseLogo);
    }

    requestAnimationFrame(pulseLogo);

    // Paragraph
    const para = document.createElement('p');
    para.textContent = 'Remember, clicking circles is quite important.';
    container.appendChild(para);

// Stable osu! button
const stableLink = document.createElement('a');
stableLink.href = 'https://m1.ppy.sh/r/osu!install.exe';
stableLink.target = '_blank';
const stableButton = document.createElement('button');

// Stable button content
const stableText = document.createElement('span');
stableText.textContent = 'Download ';
stableButton.appendChild(stableText);

const stableImg = document.createElement('img');
stableImg.src = 'https://raw.githubusercontent.com/pypppe/cdn/refs/heads/main/images/osu.png';
stableImg.alt = 'osu.png';
stableImg.style.height = '20px';
stableImg.style.width = 'auto';
stableImg.style.verticalAlign = 'middle';
stableImg.style.marginLeft = '6px';
stableButton.appendChild(stableImg);

stableLink.appendChild(stableButton);
container.appendChild(stableLink);

// Lazer button
const lazerButton = document.createElement('button');
lazerButton.className = 'lazer-btn';

// Lazer button content
const lazerText = document.createElement('span');
lazerText.textContent = 'Download ';
lazerButton.appendChild(lazerText);

const lazerImg = document.createElement('img');
lazerImg.src = 'https://r1.astrarune.com/osu.png';
lazerImg.alt = 'osu.png';
lazerImg.style.height = '20px';
lazerImg.style.width = 'auto';
lazerImg.style.verticalAlign = 'middle';
lazerImg.style.marginLeft = '6px';
lazerButton.appendChild(lazerImg);

container.appendChild(lazerButton);

    // Info Section
    const infoContainer = document.createElement('div');
    infoContainer.style.textAlign = 'left';
    infoContainer.style.marginTop = '20px';
    infoContainer.style.lineHeight = '1.5';
    infoContainer.style.color = '#DDD';

    const oftenUpdatesTitle = document.createElement('h3');
    oftenUpdatesTitle.textContent = 'Often Updates';
    oftenUpdatesTitle.style.marginBottom = '6px';
    infoContainer.appendChild(oftenUpdatesTitle);

    const oftenUpdatesList = document.createElement('ul');
    ['osu!stable - only gets bug fixes.','osu!lazer - gets updates nearly daily.'].forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        oftenUpdatesList.appendChild(li);
    });
    infoContainer.appendChild(oftenUpdatesList);

    const importantNoteTitle = document.createElement('h3');
    importantNoteTitle.textContent = 'Important Note:';
    importantNoteTitle.style.marginBottom = '6px';
    importantNoteTitle.style.marginTop = '12px';
    infoContainer.appendChild(importantNoteTitle);

    const importantNoteList = document.createElement('ul');
    ['osu!stable is recommended for low-end devices.','osu!lazer is recommended for PCs using OptiPlex 3080 or better.'].forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        importantNoteList.appendChild(li);
    });
    infoContainer.appendChild(importantNoteList);

    const iosTitle = document.createElement('h3');
    iosTitle.textContent = 'iOS notes:';
    iosTitle.style.marginBottom = '6px';
    iosTitle.style.marginTop = '12px';
    infoContainer.appendChild(iosTitle);

    const iosList = document.createElement('ul');
    ['osu!stable is not on iOS or Android, nor is it open-sourced, a mobile port is not coming.','osu!lazer is on iOS and Android, however i don’t think phones are blocked.','osu!stream is the 2012 version of osu! and is not updated.'].forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        iosList.appendChild(li);
    });
    infoContainer.appendChild(iosList);
    container.appendChild(infoContainer);

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
    popupTitle.textContent = '⚠️ Warning ⚠️';
    popup.appendChild(popupTitle);

    const popupText = document.createElement('p');
    popupText.textContent = 'osu!lazer can be laggy, however using an OptiPlex 3080 will make it run smoothly, do you wish to proceed?';
    popup.appendChild(popupText);

    const okBtn = document.createElement('button');
    okBtn.id = 'ok-btn';
    okBtn.textContent = 'Yes, gimmie the download!';
    okBtn.onclick = () => {
        window.location.href = 'https://github.com/ppy/osu/releases/latest/download/install.exe';
        popupOverlay.style.display = 'none';
    };
    popup.appendChild(okBtn);

    const neverBtn = document.createElement('button');
    neverBtn.id = 'never-btn';
    neverBtn.textContent = 'Nevermind, gimmie osu!stable!';
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

