const listaDeEstudantes = []
 

function adicionarEstudante() {
  const nomeEstudante = prompt('Digite o nome do estudante:')
  const notaPrimeiraProva = Number(prompt('Digite a nota da primeira prova:'))
  const notaSegundaProva = Number(prompt('Digite a nota da segunda prova:'))

  const objetoAluno = {
    nomeEstudante,
    notaPrimeiraProva,
    notaSegundaProva
  }

  listaDeEstudantes.push(objetoAluno)
  alert(`ALUNO ADICIONADO A LISTA\nNome: ${objetoAluno.nomeEstudante}\nNota1: ${objetoAluno.notaPrimeiraProva}\nNota2: ${objetoAluno.notaSegundaProva}`)
}

function aprovados() {
  let aprovados = listaDeEstudantes.filter(element => (element.notaPrimeiraProva + element.notaSegundaProva) / 2 >= 7)

  if(aprovados.length === 0) return alert('A lista ainda esta vazia, adicione algum aluno.')

  for(const {nomeEstudante, notaPrimeiraProva, notaSegundaProva} of aprovados){
    const media = (notaPrimeiraProva + notaSegundaProva) / 2
    alert(`A média do(a) aluno(a) ${nomeEstudante} é ${media}\nALUNO(A) APROVADO(A) `)
  }
}

function reprovados() {
  let reprovados = listaDeEstudantes.filter(element => (element.notaPrimeiraProva + element.notaSegundaProva / 2) <= 7)

  if(reprovados.length === 0) return alert('A lista ainda esta vazia, adicione algum aluno.')

  for(const {nomeEstudante, notaPrimeiraProva, notaSegundaProva} of reprovados){
    const media = (notaPrimeiraProva + notaSegundaProva) / 2
    alert(`A média do(a) aluno(a) ${nomeEstudante} é ${media}\nALUNO(A) REPROVADO(A) `)
  }
}

function listarEstudantes() {

  if(listaDeEstudantes.length === 0) return alert('A lista ainda esta vazia, adicione algum aluno.')
  
  for(const {nomeEstudante, notaPrimeiraProva, notaSegundaProva} of listaDeEstudantes){
    const media = (notaPrimeiraProva + notaSegundaProva) / 2
    alert(`Aluno: ${nomeEstudante}\nNota1: ${notaPrimeiraProva}\nNota2: ${notaSegundaProva}\nMédia: ${media}\nAprovado: ${media >= 7 ? 'SIM' : 'NÃO'}`)
  }
}


function listOption() {
  const opção = Number(prompt(`Escolha uma das opções abaixo\n1 Adicionar Estudante\n2 Ver aprovados\n3 Ver reprovados\n4 Mostrar estudantes\n5 Fechar programa`))

  switch(opção) {
    case 1:
      adicionarEstudante()
      listOption()
      break
    case 2:
      aprovados()
      listOption()
      break
    case 3:
      reprovados()
      listOption()
      break
    case 4:
      listarEstudantes()
      listOption()
      break
    case 5:
      window.close
      break
    default:
      alert('Digite uma opção valida.')
      listOption()
      break
  }
}
listOption()