const canvas = document.getElementById('animCanvas');
const context = canvas.getContext('2d');

// Total frame count in your repository's ./frames folder
const frameCount = 33; 

const currentFrame = index => (
    `./frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];

// Preload frame images
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

// Initialize display on initial load
images[0].onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(0);
};

// Window resize handler
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

// Frame rendering bound to scroll position
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
