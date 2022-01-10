//pegar o que o usuario digitar e guarda em uma variavel

//variaveis com os dados
let pontoA = 0
let pontoB = 0
let setA = 0
let setB = 0

//variaveis com elemntos do HTML
const nomeTimeA_HTML = document.getElementById('nomeTimeA')
const nomeTimeB_HTML = document.getElementById('nomeTimeB')
const pontuacaoA_HTML = document.getElementById('pontuacaoA')
const pontuacaoB_HTML = document.getElementById('pontuacaoB')
const setA_HTML = document.getElementById('setA')
const setB_HTML = document.getElementById('setB')
const btn_HTML = document.getElementById('button')

//pega o que o usuario digitou e substitui no elemento do HTML (mostra na tela)

//funções para mudar as pontuações dos times
function zerarPlacar() {
  pontoA = 0
  pontoB = 0
  pontuacaoA_HTML.innerText = pontoA
  pontuacaoB_HTML.innerText = pontoB
}

function zerarSet() {
  setA = 0
  setB = 0
  setA_HTML.innerText = setA
  setB_HTML.innerText = setB
}

function cliquePontuacaoA() {
  pontoA++
  pontuacaoA_HTML.innerText = pontoA

  if (pontoA >= 25 && pontoA - pontoB >= 2) {
    setA++
    setA_HTML.innerText = setA
    zerarPlacar()
  }
}

function cliquePontuacaoB() {
  pontoB++
  pontuacaoB_HTML.innerText = pontoB

  if (pontoB >= 25 && pontoB - pontoA >= 2) {
    setB++
    setB_HTML.innerText = setB
    zerarPlacar()
  }
}

function cliqueBotaoReset() {
  zerarPlacar()
  zerarSet()
}

function cliqueNomeA() {
  const nomeTimeA = prompt('Digite o nome desejado')
  nomeTimeA_HTML.innerText = nomeTimeA
}

function cliqueNomeB() {
  const nomeTimeB = prompt('Digite o nome desejado')
  nomeTimeB_HTML.innerText = nomeTimeB
}

pontuacaoA_HTML.addEventListener('click', cliquePontuacaoA)
pontuacaoB_HTML.addEventListener('click', cliquePontuacaoB)
btn_HTML.addEventListener('click', cliqueBotaoReset)
nomeTimeA_HTML.addEventListener('click', cliqueNomeA)
nomeTimeB_HTML.addEventListener('click', cliqueNomeB)
