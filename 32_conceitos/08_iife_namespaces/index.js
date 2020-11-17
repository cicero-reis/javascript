/**
 * IIFE
 * Executa automaticamente
 */

// !function() {
//   console.log('Teste....')
// }()

// ou

(function() {
  console.log('Teste1...')
}())

!function teste() {
  
  const x = true

  if (x) {
    console.log('Teste2....')
  }

}()

// namespaces

const dados = (function() {

  let contador = 0

  return {
    incrementar: function() {
      ++contador
      return contador
    }
  }

}())

console.log(dados.incrementar())
console.log(dados.incrementar())
console.log(dados.incrementar())
console.log(dados.incrementar())
console.log(dados.incrementar())
