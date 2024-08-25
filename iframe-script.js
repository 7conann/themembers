document.getElementById('getDataBtn').addEventListener('click', () => {
    window.parent.postMessage('getLocalStorageData', '*');
});

window.addEventListener('message', (event) => {
    if (event.data.type === 'localStorageData') {
        console.log('Developer ID:', event.data.developerId);
        console.log('Developer Token:', event.data.developerToken);
    }
});