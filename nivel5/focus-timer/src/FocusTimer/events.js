import * as Element from './elements.js'
import * as Actions from './actions.js'
import * as Timer from './timer.js'
import state from './state.js'

export function registerControls() {
  Element.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    

    if(!Actions[action]) {
      return
    }
    Actions[action]()
  })
}


export function setMinutes() {
  Element.minutes.addEventListener('focus', () => {
     Element.minutes.textContent = ""
  })
 
  Element.minutes.onkeypress = (event) => /\d/.test(event.key)
 
  Element.minutes.addEventListener('blur', (event) => {
     let time = event.currentTarget.textContent
 
     time = time > 60 ? 60 : time
 
     state.minutes = time
     state.seconds = 0
 
     Timer.updateDisplay()
     Element.minutes.removeAttribute('contenteditable')
  })
}