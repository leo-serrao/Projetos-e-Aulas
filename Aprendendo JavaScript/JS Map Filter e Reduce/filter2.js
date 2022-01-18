const lista = [
  {
    name: 'sabão em pó',
    preco: 8
  },
  {
    nome: 'cereal',
    preco: 12
  },
  {
    nome: 'toalha',
    preco: 30
  }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco
  }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))
