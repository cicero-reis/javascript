/**
 * Escopo Global
 * Bloco: o que é criado dentro do bloco não está disponivel fora (let e const)
 * Função: o que é criado dentro da funçao não está disponivel fora
 * Léxico: o que é criado dentro da funçao não está disponivel fora 
 */

// var, let e const

var nome = 'Fulano' // global

function teste() {
  
  var sobrenome = 'Reis' // bloco

  if (sobrenome == 'Reis') {
    //let ou const idade = 48; // não está dentro no mesmo escopo
    var idade = 48 // dentro do mesmo escopo
  }

  console.log('2', nome, sobrenome, idade)
}

console.log('1', nome)

teste()

// Léxico
function teste1() {
  
  var sobrenome = 'Reis' // bloco

  function teste2() {
    console.log('3', sobrenome)
  }

  teste2()

  console.log('4', nome, sobrenome)
}

teste1()
