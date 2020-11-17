"use strict";

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

let invalidEntries = 0;

const filterById = (obj) => {

    console.log(obj.id);

    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {

        return true;

    } else {

        invalidEntries++;

        return false;

    }

};


const arrById = arr.filter(filterById);

console.log();

console.log(arrById);

console.log();

console.log(invalidEntries);

console.log();

console.log('id' in arr[0]);
console.log(typeof arr[0].id);
console.log(typeof arr[0].id === 'number');
console.log(!isNaN(arr[0].id));


