
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e)=> {
    const formPopup = document.querySelector('.popup-feedback')

    if(e.target.closest('.buy__by-click')){
      formPopup.classList.add('active')
    }
    else if(!e.target.closest('.feedback') || e.target.closest('.feedback__close-img')){
      formPopup.classList.remove('active')
    }
  })
});