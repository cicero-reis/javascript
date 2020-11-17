"use strict";

const set = new Set([1,2,3,4,5,6,7,8,9]);

for (let value of set) {
    console.log(value);
}

//ADD
console.log('add');
set.add(10);

for (let value of set) {
    console.log(value);
}

//ADD - dados repitidos
console.log('add');
set.add(5);

for (let value of set) {
    console.log(value);
}

//DELETE
console.log('delete');
set.delete(5);

for (let value of set) {
    console.log(value);
}

//HAS
console.log('has');

if (!set.has(5)) {
    set.add(5);
}

for (let value of set) {
    console.log(value);
}

//SIZE
console.log('size');
console.log(set.size);

set.clear();

for (let value of set) {
    console.log(value);
}