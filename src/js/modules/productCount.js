document.addEventListener('DOMContentLoaded', () => {
  const plus = document.querySelector('.buy-form__count-plus')
  const minus = document.querySelector('.buy-form__count-minus')
  const input = document.querySelector('.buy-form__count-input')

  plus.addEventListener('click', (e) => {
    e.preventDefault()
    input.value++
  })
  minus.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value < 1) return false
    else{
      input.value--
    }
    
  })
});