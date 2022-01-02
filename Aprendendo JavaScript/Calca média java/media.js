var n1 = Number(prompt('Digite a primeira nota'))
var n2 = Number(prompt('Digite a segunda nota'))
var n3 = Number(prompt('Digite a terceira nota'))
var media

function reset() {
  var opcao = Number(
    prompt('Deseja calcular uma nova média?\n 1- Sim \n 2- Não')
  )

  switch (opcao) {
    case 1:
      location.reload()
      break
    case 2:
      alert('Até mais')
      break
  }
}

if (!n1 || !n2 || !n3) {
  alert('As notas devem ser numerais')
  location.reload()
} else {
  function calculadora() {
    var media = (n1 + n2 + n3) / 3
    alert(`Sua média é igual a: ${media}`)
    reset()
  }
  calculadora()
}
