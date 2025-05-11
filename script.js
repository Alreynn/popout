const parent = document.getElementById('parent');
const placeholder = document.getElementById('placeholder');
const textInput = document.getElementById('textInput');
const textSubmit = document.getElementById('textSubmit');
const inputContainer = document.getElementById('inputContainer');

const alertMessage = {
    noText: 'Type out your message first.'
}

const date = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const dateFormat = date.toLocaleDateString('en-GB', options);


function sticker() {
    const stickerIcon = document.getElementById('stickerIcon');
    const stickerContainer = document.getElementById('stickerContainer');

    inputContainer.classList.toggle('stickerPop');
    if (stickerContainer.style.display === 'flex') {
        stickerContainer.style.display = 'none';
        stickerIcon.className = 'fa-regular fa-face-smile';
        parent.style.paddingBottom = '60px';
    } else {
        stickerContainer.style.display = 'flex';
        stickerIcon.className = 'fa-regular fa-keyboard';
        parent.style.paddingBottom = '94%';
    }
}
function postSticker() {
    const stickerClick = document.querySelectorAll('stickerList');
    const sticker = document.createElement('img');
    sticker.className = "message";
    sticker.src = stickerClick.src;
    parent.appendChild(sticker);
    window.scrollTo(0, document.body.scrollHeight);
}

let isDateTextAvailable = false;
function addMessage() {
    if (textInput.value !== '') {
        if (isDateTextAvailable === false) {
            const dateText = document.createElement('p');
            dateText.className = 'date';
            dateText.innerText = dateFormat;
            parent.appendChild(dateText);
            isDateTextAvailable = true;
        }
        
        const message = document.createElement('p');
        message.className = "message";
        message.innerText = textInput.value;
        parent.appendChild(message);
        textInput.value = '';
        
        if (parent.classList = 'bottomSpaceout') {
            window.scrollTo(0, document.body.scrollHeight);
        }
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
        
        setInterval(() => {
            if (stickerContainer.style.display === 'flex' && alert !== null) {
                alert.style.bottom = '50%';
                placeholder.style.top = '1dvh'
            } else {
                alert.style.bottom = '90px';
                placeholder.style.top = '8dvh'
            }
        }, 100)
    }
}

const adminPanel = document.getElementById('adminPanel');
setInterval(() => {
    if (textInput.value === 'popout! --open panel') {
        adminPanel.style.display = 'block';
        textInput.value = '';
    }
}, 1000)
function closePanel() {
    adminPanel.style.opacity = '0';
}
function spamMessages() {
    for (let i = 0; i <= 31; i++) {
        addMessage();
        textInput.value = 'This message is repeated ' + i + ' times.'
    }
    textInput.value = ''
}
function generateLong() {
    for (let i = 0; i <= 100; i++) {
        textInput.value += "This text is repeated " + i + " times \n"
    }
}
const removeMessage = () => {
    message.remove()
}
const dateAssignment = () => {alert(dateFormat)}

textInput.addEventListener('click', () => {
    inputContainer.classList.remove('stickerPop');
    stickerContainer.style.display = 'none';
    stickerIcon.className = 'fa-regular fa-face-smile';
    parent.style.paddingBottom = '60px'
});

document.addEventListener('scroll', () => {
    parent.classList.add('bottomSpaceout')
})

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const slideDown = document.getElementById('slideDown');
    
    if (scrollPos + 40 >= fullHeight) {
        slideDown.style.display = 'none';
    } else {
        slideDown.style.display = 'grid';
    }
});

const slideDown = () => {window.scrollTo(0, document.body.scrollHeight)}