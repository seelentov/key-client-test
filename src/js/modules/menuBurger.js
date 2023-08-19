document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-js');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.header-burger__button-open-js')) {
      header.classList.add('menu-active');
    }
    if (e.target.closest('.header-burger__button-close-js')) {
      header.classList.remove('menu-active');
    }
  });
});