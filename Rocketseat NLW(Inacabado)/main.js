/* Abre e fecha o menu quando clicar no ícone*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Muda o shadowbox do header quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //se o scroll for maior que a altura da navegação
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// char --> character
// string --> é umasequência de caracteres(frase)
// 'isso é uma string'

// number
//12345

// tipo de dado lógico, dado buleano muito usado np java script
// boolean: true or false

//var --> variavel que pode mudar
//const --> 'constante' é uma variável que não pode mudar

//DOM Document Object Model --> Modelagem de documento HTML em JavaScript

//toda palavra fechada com par de parenteses '()' é uma funcionalidade
//ex: alert()
//toda função recebe parâmetros dentro dos parenteses

//querySelector --> funcionalidade usada para selecionar algo de dentro do HTML
//ex: document.querySelector('#header') --> dentro do meu documento HTML eu estou selecionando a seção 'header'

//querySelectorAll --> seleciona tudo no HTML que tiver aquele parâmetro especificado

//addEventListener --> executa uma função para uma ação
//ex: element.addEventListener('click', function () {
//    alert('FUNCIONOU CARAIO')
//    })
//nesse caso para a ação de click ele está executando a ação de abrir um alerta com a frase entre aspas
