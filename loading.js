const start = document.getElementById('start');
function loading() {
    window.location.href= 'chat.html';
    const startMessage = document.getElementById('startMessage');
    start.remove();
    startMessage.innerText = 'Loading...';
    setTimeout(() => { startMessage.innerText = 'Still waiting? Please check your internet connection, we are having lots of external icons to load here.' }, 8000);
    setTimeout(() => {
        startMessage.innerText = 'We are refreshing the page for you.'
        window.location.reload()
    }, 30000)
}
window.onload = document.fonts.addEventListener('loadingdone', () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        
        const elementCheck = document.createElement('i');
        elementCheck.className = 'fa-solid';
        document.body.appendChild(elementCheck);
        const fontFamily = window.getComputedStyle(elementCheck).getPropertyValue('font-family');
        if (!fontFamily.includes('Font Awesome')) {
            const loadText = document.getElementById('loadText');
            document.getElementById('loading').style.display = 'block';
            loadText.innerText = systemMessages.iconsNotFound;
        }
        elementCheck.remove();
    }, 200)
})
window.addEventListener('beforeunload', () => { document.getElementById('loading').style.display = 'block' })