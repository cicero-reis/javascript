"use strict";

const str = '123456789';

const newStr = [].map.call(str, (x) => {

    return x;

}).reverse().join('');

console.log(newStr);