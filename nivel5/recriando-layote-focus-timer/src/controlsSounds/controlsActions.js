import * as Sounds from './sounds.js'

let currentSound = null

function playSound(sound) {
  return new Promise((resolve) => {
    if (currentSound) {
      currentSound.pause()
    }
    currentSound = sound
    sound.play()
    sound.onended = resolve
  })
}

export async function startSoundFlorest() {
  await playSound(Sounds.soundFlorest)
}

export async function startSoundRain() {
  await playSound(Sounds.soundRain)
}

export async function startSoundCoffeShope() {
  await playSound(Sounds.soundCoffeShop)
}

export async function startSoundFlame() {
  await playSound(Sounds.soundFlame)
}
