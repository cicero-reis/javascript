"use strict";

/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
 */

const number = [3,5,77,54,32,4,66,88,65,10,9];

const isBigEnough = (value) => {

    return value >= 10;
}

const filtered = number.filter(isBigEnough);

console.log(filtered);