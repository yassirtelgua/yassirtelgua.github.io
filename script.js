const canvas = document.getElementById('animCanvas');
const context = canvas.getContext('2d');

// Frame sequence configuration
const frameCount = 33; 

const currentFrame = index => (
    `./frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];

// Preload sequence frames
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

function renderFrame(index) {
    if (images[index] && images[index].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
}

// Initial canvas draw
images[0].onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(0);
};

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    renderFrame(frameIndex);
});

// Update animation state on scroll
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
    
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
});
