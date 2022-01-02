var numero = 0
var multiplicador = Number(prompt('Digite o valor da tabuada:'))
var resultado

function tabuada() {
  while (numero <= 10) {
    resultado = numero * multiplicador
    console.log(resultado)
    numero++
  }
}

tabuada()
