import * as Elements from '../controlsSounds/elements.js'
import * as ActionsSounds from './controlsActions.js'


export function startSound() {
  Elements.selectedSound.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    
    removerClasseActive() 
    event.target.classList.toggle('active')
  
    if(!ActionsSounds[action]) {
      return
    }
    ActionsSounds[action]()
  })
}

function removerClasseActive() {
  Elements.searchElementsForClassActive().forEach(function(elemento) {
    elemento.classList.remove('active');
  });
}

