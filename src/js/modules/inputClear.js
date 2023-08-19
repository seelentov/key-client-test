
document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (e) => {
    const input = document.querySelector('.footer__subscribe-input-input')
    if (e.target.closest('.footer__subscribe-input-clear')) {
      input.value = ''
    }
  })
});