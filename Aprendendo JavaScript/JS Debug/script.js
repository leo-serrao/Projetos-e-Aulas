function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

    if (typeof arr !== 'object')
      throw new TypeError('O array deve ser do tipo object')

    if (typeof num !== 'number')
      throw new TypeError('O numero deve ser do tipo number')

    if (arr.length !== num) throw new RangeError('Tamanho Inválido')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um Reference Error')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Esse erro é um Type Error')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Esse erro é um Range Error')
      console.log(e.message)
    } else {
      console.log('Tipo de erro não esperado:' + e)
    }
  }
}

console.log(validaArray([1, 2, 4, 3, 5], 5))
