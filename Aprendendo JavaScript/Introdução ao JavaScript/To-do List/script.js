var inputHTML = document.getElementById('input')
var list = document.getElementById('listaCheck')
var checkbox = document.querySelectorAll('checkbox')
const button = document.getElementById('btn')

button.addEventListener('click', () => {
  var input = inputHTML.value
  if (input === '') {
    alert('Digite um item')
  } else {
    list.innerHTML += `<li><input type="checkbox" /><label>${input}</label></li>`
  }
})

// ---------------- Dark Mode -------------------- //
