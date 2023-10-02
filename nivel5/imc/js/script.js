import tete from  './modal.js'

const modal = document.querySelector('#modal');
const modalResponse = document.querySelector('#modal span')
const buttonCloseModal = document.querySelector('#modal button')
const form = document.querySelector('#calculate-imc')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  modalResponse.innerHTML = `${tete.calculateIMC()}`
  tete.toggleModal(modal) 
})

buttonCloseModal.addEventListener('click', () => {
  tete.clearFields()
  tete.toggleModal(modal) 
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    tete.clearFields()
    tete.toggleModal(modal) 
  }
});

