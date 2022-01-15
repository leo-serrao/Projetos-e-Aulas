function getAdmins(map) {
  let admins = []
  let users = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    } else if (value === 'User') {
      users.push(key)
    }
  }
  return getAdmins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Leonardo', 'Admin')
usuarios.set('Natalia', 'User')
usuarios.set('Cleusa', 'Admin')

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
  const mySet = new Set(arr)

  return [...mySet]
}

console.log(valoresUnicos(meuArray))
