document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest('.product-img__additional-item')){
      const image = e.target
      const mainImage = document.querySelector('.main-item__image')
      const prevImageSrc = mainImage.src
      mainImage.src = image.src
    }
  })
});