'use strict';

/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

let numeros = [2,4,6,8,10];

let dobro = numeros.map((numero) => {
    return numero * 2;
});

let imprimeNumero = (numero) => {
    console.log(numero);
}

numeros.forEach(imprimeNumero);

console.log('----------------------------');

dobro.forEach(imprimeNumero);

console.log('----------------------------');

let id = [1,2,3,4,5,6,7,8,9,10];
let link = 'http://produto/';

let criaLink = id.map((numero) => {
    return link + numero;    
});

console.log(criaLink);