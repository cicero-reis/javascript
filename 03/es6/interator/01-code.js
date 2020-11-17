'use strict';

let iteravelCarros = ['Gol', 'Corsa', 'Palio', 'Uno', 'Fox'];

//Obtém o iterador
let iteradorCarros = iteravelCarros[Symbol.iterator]();

console.log('Relacão entre iterador e interavel');

console.log(iteradorCarros.next());
console.log(iteradorCarros.next());
console.log(iteradorCarros.next());
console.log(iteradorCarros.next());
console.log(iteradorCarros.next());
console.log(iteradorCarros.next());

