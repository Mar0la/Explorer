export default {
  weight: document.querySelector('#weight'),
  height: document.querySelector('#height'),
  clearFields() {
    this.weight.value = '';
    this.height.value = '';
  },
  toggleModal(modalElement) {
    modalElement.classList.toggle('hidden');
  },
  calculateIMC() {
    const weight = this.weight.valueAsNumber
    const height = this.height.valueAsNumber / 100
    
    const imc = weight / (height * height)
   
    return imc.toFixed(2)
  }
}
