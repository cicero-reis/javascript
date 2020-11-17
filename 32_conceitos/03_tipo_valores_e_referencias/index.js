/**
 * Por Valor
 */
let x = 10 // memória.672626 = nome x, valor 10
let y = x
x = 20
console.log(x,y)

/**
 * Por referência
 */
let obj = { valor: 10 }
let z = obj
obj.valor = 20
z.valor = 50
console.log(obj, z)

