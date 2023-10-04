import * as Events from './events.js'
import * as Timer from './timer.js'
import { state } from './state.js'

export function start(minutes,seconds) {
  state.minutes = minutes
  state.seconds = seconds
  Events.registerControls()
  Timer.attDisplay()
}