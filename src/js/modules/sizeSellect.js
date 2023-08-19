document.addEventListener('DOMContentLoaded', () => {
  const sellectBlock = document.querySelector('.product-buy__size')
  const arrow = document.querySelector('.product-buy__size-main__img')
  const input = document.querySelector('.product-buy__size-select')

  document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.closest('.product-buy__size-main')) {
      if (sellectBlock.classList.contains('active')) {
        sellectBlock.classList.remove('active')
        arrow.style.transform = 'rotate(90deg) '
      } else {
        sellectBlock.classList.add('active')
        arrow.style.transform = 'rotate(90deg) rotateY(180deg)'
      }
    }
  })

  document.addEventListener('click', (e) => {
    e.preventDefault()
    if (!e.target.closest('.product-buy__size')) {
      sellectBlock.classList.remove('active')
      arrow.style.transform = 'rotate(90deg) '
    }
  })
  document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.closest('.product-buy__size-option')) {
      input.value = e.target.innerText
      sellectBlock.classList.remove('active')
      arrow.style.transform = 'rotate(90deg)'
    }
  })
});