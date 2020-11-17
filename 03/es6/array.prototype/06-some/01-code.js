'use strict';

let pesoMalas = [20,30,45,50,60];

let verificaPesoDasMalasAcimaDoPermitido = pesoMalas.some((malas) => {
    return malas > 30;
});

console.log(verificaPesoDasMalasAcimaDoPermitido);

//Testing array elements using arrow functions

console.log([2,5,8,1,4].some(x => x > 10) ? 'True' : 'False');
console.log([12,5,8,1,4].some(x => x > 10) ? 'True' : 'False');


//Checking whether a value exists using an arrow functionSection

const fruits = ['apple', 'banana', 'mango', 'guava'];

const checkAvailability = (arr, val) => {

    return arr.some(arrVal => val === arrVal);

};

// Checking whether a value exists using an arrow function

console.log(checkAvailability(fruits, 'kela'));
console.log(checkAvailability(fruits, 'banana'));

//Converting any value to Boolean

let TRUTHY_VALUES = [true, 'true', 1];

const getBoolean = (value) => {

    'use strict';

    if (typeof value === 'string') value = value.toLowerCase().trim();    

    return TRUTHY_VALUES.some(t => t === value )
}

console.log(getBoolean(false));   // false
console.log(getBoolean('false')); // false
console.log(getBoolean(1));       // true
console.log(getBoolean('true'));  // true
