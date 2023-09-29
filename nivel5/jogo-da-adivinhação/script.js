const containerApresentação = document.querySelector('#container-apresentação')
const buttonContainerApresentação = document.querySelector('#container-apresentação  button')
const tentativa = document.querySelector('input')


const containerJogarNovamente = document.querySelector('#container-jogar-novamente')
const buttonContainerJogarNovamente = document.querySelector('#container-jogar-novamente > button')
const spanContainerJogarNovamente = document.querySelector('#container-jogar-novamente h2 span ')


let index = 0
let numeroAleatorio = Math.floor(Math.random() * 11)

buttonContainerApresentação.addEventListener('click', () => {
  event.preventDefault()
  const valorDoInput = Number(tentativa.value)

  if(valorDoInput !== numeroAleatorio) {
    index++
  } else {
    containerApresentação.classList.toggle('hidden')
    containerJogarNovamente.classList.toggle('hidden')
    spanContainerJogarNovamente.innerHTML = index
  }

})

buttonContainerJogarNovamente.addEventListener('click', () => {
  index = 0
  numeroAleatorio = Math.floor(Math.random() * 11)
  tentativa.value = ''
  containerApresentação.classList.toggle('hidden')
  containerJogarNovamente.classList.toggle('hidden')
})