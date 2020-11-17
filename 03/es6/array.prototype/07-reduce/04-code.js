"use strict";

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

const result = arr.sort().reduce( (init, current) => {

    if (init.length === 0 || init[init.length -1] !== current) {

        init.push(current);

    }

    return init;

}, []);

console.log(result);