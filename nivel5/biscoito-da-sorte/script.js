const biscoitoFechado = document.querySelector('#biscoito-fechado')
const biscoitoAberto = document.querySelector('#biscoito-aberto')

const img = document.querySelector('#biscoito-fechado img')
const button = document.querySelector('#biscoito-aberto button')
const texto = document.querySelector('#biscoito-aberto p')
const frases = ['A vida trará coisas boas se tiver paciência', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo', 'Não há que ser forte. Há que ser flexível.', 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?']
let numeroAleatorio = Math.floor(Math.random() * 7)

function atualizarTextoBiscoito() {
  texto.innerHTML = frases[numeroAleatorio];
}

function iniciarAnimacao() {
  biscoitoFechado.classList.toggle('hidden');
  biscoitoAberto.classList.toggle('hidden');
  texto.classList.toggle('animation-text');
  atualizarTextoBiscoito();
}

img.addEventListener('click', () => {
  iniciarAnimacao()
})

button.addEventListener('click', () => {
  iniciarAnimacao()
  numeroAleatorio = Math.floor(Math.random() * 7)
})
