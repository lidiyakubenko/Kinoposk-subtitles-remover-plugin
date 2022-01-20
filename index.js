document.getElementById('kinopoisk-subtitles-checkbox').addEventListener('change', (e) => {
    chrome.tabs.executeScript({
        file: 'contentScript.js',
    });
})