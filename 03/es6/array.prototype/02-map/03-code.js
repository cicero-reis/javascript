"use strict";

/**
 * Exemplo: Mapeando um array de números usando uma função callback que contém um argumento
 */

const numbers = [1,4,9];

const doubles = numbers.map((num) => {
    return num * 2;
});

console.log(doubles);