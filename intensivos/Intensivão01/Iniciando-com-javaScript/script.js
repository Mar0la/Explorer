function helloWord(){
  alert('Hello World!')
}


function vereficaNumero() {
  const numberOne = Number(prompt('Digite um número:'))
  if(numberOne) {
    alert('É NÚMERO')
  } else {
    alert('NÃO É NÚMERO')
  }
}

function vereficaString() {
  const numberOne = Number(prompt('Digite um número:'))
  if(!numberOne) {
    alert('É STRING')
  } else {
    alert('NÃO É STRING')
  }
}

function vereficaBoolean() {
  const palavra = prompt('Digite um número:')
  if(palavra === 'true' || palavra === 'false' ) {
    alert('É BOOLEAN')
  } else {
    alert('NÃO É BOOLEAN')
  }
}

function soma(){
  const numberOne = Number(prompt('Digite um número:'))
  const numberTwo = Number(prompt('Digite outro número:'))
  const soma = numberOne + numberTwo
  alert(`A soma dos 2 números é: ${soma}`)
}

function subtrair(){
  const numberOne = Number(prompt('Digite um número:'))
  const numberTwo = Number(prompt('Digite outro número:'))
  const subtração = numberOne - numberTwo
  alert(`A subtração dos 2 números é: ${subtração}`)
}

function multiplicar(){
  const numberOne = Number(prompt('Digite um número:'))
  const numberTwo = Number(prompt('Digite outro número:'))
  const multiplicação = numberOne * numberTwo
  alert(`A multiplicação dos 2 números é: ${multiplicação}`)
}

function dividir(){
  const numberOne = Number(prompt('Digite um número:'))
  const numberTwo = Number(prompt('Digite outro número:'))
  const divisão = numberOne / numberTwo
  alert(`A divisão dos 2 números é: ${divisão}`)
}

function vereficarParImpar(){
  const number = Number(prompt('Digite um número:'))
  const verefica = number % 2 === 0 ? 'PAR' : 'IMPAR'
  alert(`O Número ${number} é: ${verefica}`)
}


function menuOperaçõsAritimeticas() {
  const opção = Number(prompt(
    `Digite um valor\n01 Somar\n02 Subtrair\n03 Multiplicar\n04 Divdir\n05 Vereficar se é PAR ou IMPAR\n06 VOLTAR`))

  switch(opção){
    case 1:
      soma()
      menuOperaçõsAritimeticas()
      break

    case 2:
      subtrair()
      menuOperaçõsAritimeticas()
      break

    case 3:
      multiplicar()
      menuOperaçõsAritimeticas()
      break

    case 4:
      dividir()
      menuOperaçõsAritimeticas()
      break

    case 5:
      vereficarParImpar()
      menuOperaçõsAritimeticas()
      break
    case 6:
      menu()
      break
    default:
      alert('Digite um valor valido.')
      break
  }
}


function menu() {
  const opção = Number(prompt(
    `Digite um valor\n01 Exibir Hello World!\n02 Operações Aritimeticas\n03 Vereficar se é número\n04 Vereficar se é string\n05 Vereficar se é Boolean\n06 FECHAR`))

  switch(opção) {
    case 1:
      helloWord()
      menu()
      break
    case 2:
      menuOperaçõsAritimeticas()
      menu()
      break
    case 3:
      vereficaNumero()
      menu()
      break
    case 4:
      vereficaString()
      menu()
      break
    case 5:
      vereficaBoolean()
      menu()
      break
    case 6:
      window.close()
      break
    default:
      alert('Digite um valor valido.')
      break
  }
}

menu() 
