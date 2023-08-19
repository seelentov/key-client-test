
document.addEventListener('DOMContentLoaded', () => {
  const formDiv = document.querySelector('.popup-feedback')
  const form = document.querySelector('.feedback')
  const submit = form.querySelector('.feedback__submit-input')

  
  function validateForm() {
    
    

    const name = form.querySelector('.feedback__name-input')
    let nameValue = form.querySelector('.feedback__name-input').value
    const phone = form.querySelector('.feedback__phone-input')
    let phoneValue = form.querySelector('.feedback__phone-input').value
  
    name.classList.remove('err')
    phone.classList.remove('err')

    let err = 0

    if (nameValue == "" || !/^[a-zA-Zа-яёА-ЯЁ]{2,20}$/.test(nameValue)) {
      name.value = ''
      name.classList.add('err')
      name.placeholder = 'Введите корректное имя'
      err++
    }
  
    
    if (phoneValue == "" || !/^[0-9]{6,20}$/.test(phoneValue)) {
      phone.value = ''
      phone.classList.add('err')
      phone.placeholder = 'Введите корректный номер телефона'
      err++
    }
  
    if (err === 0) {
      name.classList.remove('err')
      phone.classList.remove('err')
      name.classList.add('ok')
      phone.classList.add('ok')
      name.placeholder = ''
      phone.placeholder = ''
      name.value = ''
      phone.value = ''

      submit.style.background = 'green'
      submit.value='УСПЕШНО!'

      setTimeout(()=>{
        formDiv.classList.remove('active')
      },2000)
    }
    
    setTimeout(()=>{
      name.classList.remove('err')
      phone.classList.remove('err')
      name.placeholder = 'Иван Петров'
      phone.placeholder = '+ 7 (902) 231-12-32'
    }, 2000)
  }
  submit.addEventListener('click', validateForm)
});