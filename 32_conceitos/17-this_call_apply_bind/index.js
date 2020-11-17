/** 
 * call
 * */ 
const dados1 = { nome: 'Cicero'}

const saudacao1 = function(idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`)
}

console.log('call')
saudacao1.call(dados1, 28)

/**
 * apply
 */ 
const dados2 = { nome: 'Cicero'}

const argumento = [48]

const saudacao2 = function(idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`)
}

console.log('applay')
saudacao2.apply(dados2, argumento)

/**
 * bind
 */
const dados3 = { nome: 'Cicero'}

const saudacao3 = function(idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`)
}

console.log('applay')
const bound = saudacao3.bind(dados3)
bound(48)

