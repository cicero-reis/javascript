console.log(typeof true) // Bollean
console.log(typeof Boolean(true)) // Boolean
console.log(typeof new Boolean(true)) // Boolean
console.log(typeof new Boolean(true).valueOf()) // Boolean

console.log(typeof 'Fulano') // string
console.log(typeof 'Fulano'.length)

console.log(typeof 10) // number
console.log(typeof 10.5) // number

let doze = new Number(12)
let quinze = doze + 3
console.log(quinze)

let numeroUm = '1000'
console.log(typeof numeroUm)
console.log(typeof Number(numeroUm))

console.log(typeof doze) // Object
console.log(typeof quinze) // number

