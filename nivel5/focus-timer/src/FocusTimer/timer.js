import state from './state.js'
import * as Element from './elements.js'
import { reset } from './actions.js'

export function countdown() {
  clearInterval(state.countdownId)
 if(!state.isRunning) return
 
 let minutes = Number(Element.minutes.textContent)
 let seconds = Number(Element.seconds.textContent)
 seconds--
 if(seconds < 0) { 
  seconds = 59
  minutes--
}
 if(minutes < 0) {
  reset()
  return
 }

 setTimeout(() => countdown(), 1000)
 updateDisplay(minutes,seconds)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  Element.minutes.textContent = String(minutes).padStart(2,'0')
  Element.seconds.textContent = String(seconds).padStart(2,'0')
}