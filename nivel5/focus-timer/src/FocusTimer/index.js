import state from './state.js'
import * as Events from './events.js'
import * as Timer from './timer.js'

export function start(minutes,seconds) {
  state.minutes = minutes
  state.seconds = seconds
  Events.registerControls()
  Timer.updateDisplay()
  Events.setMinutes()
}