function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current
  })
}

const arr1 = [1, 2, 3, 4, 5]

console.log(somaNumeros(arr1))
