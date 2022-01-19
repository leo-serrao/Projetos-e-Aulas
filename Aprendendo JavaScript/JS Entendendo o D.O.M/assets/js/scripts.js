function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  btn.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

function changeText() {
  if (body.classList.contains(darkModeClass)) {
    btn.innerHTML = 'Ligh Mode'
    h1.innerHTML = 'Dark Mode ON'
  } else {
    btn.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
  }
}

const darkModeClass = 'dark-mode'
const btn = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

btn.addEventListener('click', changeMode)
