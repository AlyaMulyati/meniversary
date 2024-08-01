document.addEventListener('DOMContentLoaded', () => {
    const numHearts = 20;
    const heartsContainer = document.getElementById('hearts');
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heartsContainer.appendChild(heart);
    }

    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // Set volume level (0.0 to 1.0)
});
