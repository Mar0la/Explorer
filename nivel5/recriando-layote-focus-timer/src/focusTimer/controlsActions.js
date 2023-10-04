import * as Timer from './timer.js'

export function start() {
  Timer.countDown()
}

export function stop() {
  Timer.stopTime()
}

export function addFiveMinutes() {
  Timer.addFive()
}

export function removeFiveMinutes() {
  Timer.removeFive()
}