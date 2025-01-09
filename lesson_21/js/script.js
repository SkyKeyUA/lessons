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
