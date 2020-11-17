"use strict";

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items basead on serach criteria (query)
 */
const filterItems = (query) => {

    return fruits.filter(el => 
            el.toLowerCase()
            .indexOf(
                query.toLowerCase()
            ) > -1);
};

console.log(filterItems('ap'));
console.log(filterItems('an'));
