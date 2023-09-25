const numberOne = Number(prompt('Digite o primeiro número:'))
const numberTwo = Number(prompt('Digite o primeiro segundo:'))

function operations() {
  
  console.log(typeof numberOne)

  const sum = numberOne + numberTwo
  const subtraction = numberOne - numberOne
  const multiplication = numberOne * numberTwo
  const division = numberOne / numberTwo
  const restDivision = numberOne % numberTwo

  if(numberOne === numberTwo) alert('Os 2 números digitas são iguais.')

  alert(`Soma: ${sum} a soma dos 2 números digitados é ${sum % 2 === 0 ? 'par' : 'impar'}\nSubtração: ${subtraction}\nMultiplicação: ${multiplication}\nDivisão: ${division}\nResto da Divisão: ${restDivision}`)
}

operations()