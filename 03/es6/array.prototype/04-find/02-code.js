"use strict";

/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

 //Encontrar um número primo em uma arraySeção

const isPrime = (element, index, array) => {

    let start = 2;

    while (start <= Math.sqrt(element)) {
        
        if (element % start++ < 1) {
            return false;
        }
    }

    return element > 1;
};

const numberOne = [4,6,8,12];
const numberTwo = [4,5,8,12];

console.log(numberOne.find(isPrime));
console.log(numberTwo.find(isPrime));