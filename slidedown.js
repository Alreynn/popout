window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const slideDownButton = document.getElementById('slideDown');
    if (scrollPos + 40 >= fullHeight) { slideDownButton.style.display = 'none' 
    } else { 
        slideDownButton.style.display = 'grid' 
    }
    
    const stickerContainer = document.getElementById('stickerContainer');
    setInterval(() => {
        if (stickerContainer.style.display === 'flex') {
            slideDownButton.style.bottom = '50dvh';
        } else {
            slideDownButton.style.bottom = '96px';
        }
    }, 100)
});

const slideDown = () => {window.scrollTo(0, document.body.scrollHeight)}