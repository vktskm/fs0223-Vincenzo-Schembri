const playButton = document.getElementById('playButton');
const songTitle = document.getElementById('songTitle');
playButton.addEventListener('click', () => {
    songTitle.style.animationPlayState = 'running';
});
