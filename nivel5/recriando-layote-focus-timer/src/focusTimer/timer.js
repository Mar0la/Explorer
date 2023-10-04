import * as Elements from './elements.js'
import * as Events from './events.js'
import { state } from './state.js'



export function countDown() {
  if (!state.isRunning) {
    state.isRunning = true
    startCountdown()
  }
}

function startCountdown() {
  let minutes = parseInt(Elements.minutes.textContent)
  let seconds = parseInt(Elements.seconds.textContent)

  if (seconds > 0 || minutes > 0) {
    if (seconds === 0) {
      minutes--
      seconds = 59
    } else {
      seconds--
    }

    attDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => startCountdown(), 1000)
  } else {
    state.isRunning = false
    alert('ACABOU O TEMPO')
    Events.removerClasseActive()
  }
}

export function stopTime() {
  if (state.isRunning) {
    clearTimeout(state.countdownId);
    state.isRunning = false;
  }
}

export function addFive(){
  let minutes = parseInt(Elements.minutes.textContent);
  let seconds = parseInt(Elements.seconds.textContent);

  minutes += 5;

  if (minutes > 60) {
    alert('VOCÊ ATINGIU O LIMITE DE 1 HORA DE ESTUDO POR VEZ.');
    minutes = 60;
  }

  attDisplay(minutes, seconds);
}

export function removeFive(){
  let minutes = Number(Elements.minutes.textContent) 
  let seconds = Number(Elements.seconds.textContent)
  if(minutes > 5) {
    minutes -= 5
    attDisplay(minutes,seconds)
  } else {
    alert('PARECE QUE VOCê NÃO QUER ESTUDAR, MAS TEMOS QUE PELO MENOS ESTUDAR 5M POR VEZ')
    attDisplay(5)
  }
}

export function attDisplay(minutes,seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  
  Elements.minutes.textContent = String(minutes).padStart(2,'0')
  Elements.seconds.textContent = String(seconds).padStart(2,'0')
}