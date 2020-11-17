'use strict'

let numero = [1,2,3,4,5];

let interatorNumero = numero[Symbol.iterator]();

console.log(interatorNumero.next());
console.log(interatorNumero.next());
console.log(interatorNumero.next());
console.log(interatorNumero.next());
console.log(interatorNumero.next());
console.log(interatorNumero.next());