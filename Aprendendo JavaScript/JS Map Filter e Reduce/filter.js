function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const meuArray = [1, 2, 5, 7, 24, 30, 52, 41, 86]

console.log(filtraPares(meuArray))

// Também poderia ser feito na propria função filtraPares

//  function filtraPares(arr) {
//  return arr.filter(function(item) {
//     return item % 2 === 0
//   })
// }
