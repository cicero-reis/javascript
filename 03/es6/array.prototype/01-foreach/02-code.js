"use strict";

/**
 * Imprimindo os conteúdos de uma ordem
 */
function logArrayElements(element, index, array) {

    console.log("a[" + index + "] = " + element);
    console.log(array);
}

const number = [1,2,3,4,5,6,7,8,9];

number.forEach(logArrayElements);




