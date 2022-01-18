const maca = {
  value: 2
}

const laranja = {
  value: 3
}

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg)
}

const meuArr = [1, 2]

console.log(mapComThis(meuArr, laranja))
