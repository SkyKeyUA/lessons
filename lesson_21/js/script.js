if (768 >= window.innerWidth) {
  const menuToggle = document.querySelector('.icon-menu');

  menuToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('open-menu');
  });
}
if (480 >= window.innerWidth) {
  const switchButtons = document.querySelectorAll('.switch__body button');
  switchButtons?.forEach((switchButton) => {
    switchButton.addEventListener('click', () => {
      switchButtons?.forEach((btn) => {
        btn.classList.remove('switch__active');
      });
      switchButton.classList.add('switch__active');
    });
  });
}

const heroVideo = document.querySelector('.hero__video');
const playVideo = document.getElementById('play-video');
const pauseVideo = document.getElementById('pause-video');

const toggleVideo = () => {
  if (heroVideo.paused || heroVideo.ended) {
    heroVideo.play();
    pauseVideo.style.display = 'flex';
    playVideo.style.display = 'none';
  } else {
    heroVideo.pause();
    playVideo.style.display = 'flex';
    pauseVideo.style.display = 'none';
  }
};
playVideo.addEventListener('click', toggleVideo);
pauseVideo.addEventListener('click', toggleVideo);
