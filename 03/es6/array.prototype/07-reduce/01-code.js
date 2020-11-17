'use strict';

let numeros = [1,2,3,4,5,6,7,8,9];

let soma = 0;

let total = numeros.reduce((soma, numero) => {
    return soma + numero;
}, 0);

console.log(total);

const arrayOne = [1,2,3,4,5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arrayOne.reduce(reducer));
console.log(arrayOne.reduce(reducer, 5));

//Soma todos os valores de uma array

const x = [1,2,3,4,5];
console.log(x.reduce( (a, b) => a + b ));

//Redução de um array de arrays

console.log([[0,1], [2,3], [4,5]].reduce( (a, b) => a.concat(b)));

// Contando valores iguais em um objeto

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce( (allNames, name) => {

    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }

    return allNames;

}, {});

console.log(countedNames);

//Juntando arrays contidos num array de objetos usando o operador spread e o valorInicial

