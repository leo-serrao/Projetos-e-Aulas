const notasAlunos = [
  {
    nome: 'Bruno',
    nota: 8
  },
  {
    nome: 'Luisa',
    nota: 7
  },
  {
    nome: 'Lucas',
    nota: 4
  },
  {
    nome: 'Rebeca',
    nota: 7.5
  }
]

function aprovado(alunos, media) {
  let aprovados = []
  let reprovados = []

  for (let i = 0; i < alunos.length; i++) {
    const { nome, nota } = alunos[i]

    if (nota >= media) {
      aprovados.push(` ${nome}`)
    } else {
      reprovados.push(nome)
    }
  }
  console.log(`Os seguintes alunos foram aprovados:

  ${aprovados} 
  
  E os seguintes alunos foram reprovados:

  ${reprovados}`)
}

aprovado(notasAlunos, 7)
