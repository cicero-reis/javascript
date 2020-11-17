console.log(1 + 1) // expressão

console.log(Math.random() + 5) // expressão

function expressao() {
  return 1 + 1
}

expressao()

const variavel = 20

if (true) { // expressão
  console.log(30)
}

//expressão "autoinvocada" de função
(function digaOi() {
  console.log("Oi!");
})();


// Expressão de Função: var name = function()
//expressão anônima de função
var anonima = function() {
  console.log('Anonima')
}

anonima()
