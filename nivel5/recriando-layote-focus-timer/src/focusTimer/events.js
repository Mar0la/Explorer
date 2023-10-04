import * as Element from './elements.js'
import * as Actions from './controlsActions.js'

export function registerControls() {
  Element.controlsTime.addEventListener('click', (event) => {
    const action = event.target.dataset.action
 
    if(action === 'start' || action === 'stop'){
      removerClasseActive() 
      event.target.classList.toggle('active')
    }

    if(!Actions[action]) {
      return
    }
    Actions[action]()
  })
}

export function removerClasseActive() {
  Element.searchElementsForClassActive().forEach(function(elemento) {
    elemento.classList.remove('active');
  });
}