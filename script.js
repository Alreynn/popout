const parent = document.getElementById('parent');
const textInput = document.getElementById('textInput');
const textSubmit = document.getElementById('textSubmit');
const placeholder = document.getElementById('placeholder')

const alertMessage = {
    noText: 'Type out your message first.'
}
function addMessage() {
    if (textInput.value !== '') {
        const message = document.createElement('p');
        message.className = "message";
        message.innerText = textInput.value;
        parent.appendChild(message);
        textInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
        if (textSubmit.onclick && placeholder !== null) {
            placeholder.remove();
        }
    } else {
        const alert = document.createElement('p');
        alert.className = 'alert';
        alert.innerText = alertMessage.noText;
        parent.appendChild(alert);
        setTimeout(() => {
            alert.classList.add('hide');
            setTimeout(() => {
                alert.remove();
            }, 1100);
        }, 3500);
    }
}
document.addEventListener('scroll', () => {
    parent.classList.add('bottomSpaceout');
})