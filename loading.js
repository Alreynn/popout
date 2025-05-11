const start = document.getElementById('start');
function loading() {
    window.location.href= 'chat.html';
    const startMessage = document.getElementById('startMessage');
    start.remove();
    startMessage.innerText = 'Loading...';
    setTimeout(() => {
        startMessage.innerText = 'Still waiting? Please check your internet connection, we are having lots of external icons to load here.'
    }, 8000);
    setTimeout(() => {
        startMessage.innerText = 'We are refreshing the page for you.'
        window.location.reload()
    }, 30000)
}