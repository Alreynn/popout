const parent = document.getElementById('parent');
const textInput = document.getElementById('textInput');
const inputContainer = document.getElementById('inputContainer');

const systemMessages = {
    iconsNotFound: 'Please try to restart your internet connection.',
    noText: 'Type out your message first.'
}
// Stickers Feature
function sticker() {
    const stickerIcon = document.getElementById('stickerIcon');
    const stickerContainer = document.getElementById('stickerContainer');
    
    // Toggle Class
    inputContainer.classList.toggle('stickerPop');
    if (stickerContainer.style.display === 'flex') {
        stickerContainer.style.display = 'none';
        stickerIcon.className = 'fa-regular fa-face-smile';
        parent.style.paddingBottom = '60px';
    } else {
        stickerContainer.style.display = 'flex';
        stickerIcon.className = 'fa-regular fa-keyboard';
        parent.style.paddingBottom = '45dvh';
    }
}
const allStickers = document.querySelectorAll('.stickerList');
allStickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        const stickerPost = document.createElement('img');
        stickerPost.src = sticker.src;
        stickerPost.classList.add('message');
        parent.appendChild(stickerPost);
    });
});

function addMessage() {
    // Checks if user has input values
    if (textInput.value !== '') {
        const message = document.createElement('p');
        message.className = 'message';
        message.innerText = textInput.value;
        parent.appendChild(message);
        textInput.value = '';
        if (parent.classList = 'bottomSpaceout') { window.scrollTo(0, document.body.scrollHeight) }
    } else {
        const alert = document.createElement('p');
        alert.className = 'alert';
        alert.innerText = systemMessages.noText;
        parent.appendChild(alert);
        // Fade-out
        setTimeout(() => {
            alert.classList.add('hide');
            setTimeout(() => { alert.remove() }, 1100)
        }, 3500);
        // Alert follows the height
        setInterval(() => {
            if (stickerContainer.style.display === 'flex' && alert !== null) { alert.style.bottom = '50%' } else { alert.style.bottom = '90px' }
        }, 100)
    }
}

// Administrator Panel Features
const adminPanel = document.getElementById('adminPanel');
setInterval(() => {
    if (textInput.value === 'popout! --open panel') {
        adminPanel.style.display = 'block';
        textInput.value = '';
    }
}, 300)
const closePanel = () => {adminPanel.style.display = 'none'}
function spamMessages() {
    for (let i = 0; i <= 31; i++) {
        addMessage();
        textInput.value = 'This message is repeated ' + i + ' times.'
    }
    textInput.value = ''
}
const removeMessage = () => { message.remove() }
// Auto close stickerContainer if user click textInput
textInput.addEventListener('click', () => {
    inputContainer.classList.remove('stickerPop');
    stickerContainer.style.display = 'none';
    stickerIcon.className = 'fa-regular fa-face-smile';
    parent.style.paddingBottom = '60px'
});

// Adds bottomSpaceout if chat is scrollable
document.addEventListener('scroll', () => { parent.classList.add('bottomSpaceout') })