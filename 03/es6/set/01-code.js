"use strict";

const set = new Set();

set.add(1);
set.add(2);
set.add(3);

for(const valor of set) {
    console.log(valor);
}

const set1 = new Set([1,2,3,4,5,6,7,8,9]);

for(const valor of set1) {
    console.log(valor);
}

set1.add(10);
set1.add(11);
set1.add(12);

console.log('------------------------------');

for (const valor of set1) {
    console.log(valor);
}

console.log('------------------------------');

set1.add([13,14,15,16]);


for (let value of set1) {

    if (isNaN(value)) {
        console.log(value);
    }
}