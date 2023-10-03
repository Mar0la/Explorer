import state from './state.js'
import * as Element from './elements.js'
import * as Timer from './timer.js'
import * as Sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning =  document.documentElement.classList.toggle('running')
  
  Timer.countdown()
  Sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.toggle('running')
  Timer.updateDisplay()
  Sounds.buttonPressAudio.play()
}

export function set() {
  Element.minutes.setAttribute('contenteditable', true)
  Element.minutes.focus()
  Sounds.buttonPressAudio.play()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute) {
    Sounds.bgAudio.play()
    return
  }
  Sounds.bgAudio.pause()
}