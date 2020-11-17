/*****************************
* Variables and data types
*/

let firstName1 = 'John'
console.log(firstName1)

let lastName1 = 'Smith'
let age1 = 28

let fullAge = true
console.log(fullAge)

let job1
console.log(job1)

job1 = 'Teacher'
console.log(job1)

// Variable naming rules
let _3years = 3
let johnMark = 'John and MArk'

// let if = 23 (if) palavra reservada

/*****************************
* Variable mutation and type coercion
*/

var firstName2 = 'John';
var age = 28;

// Type coercion
console.log(firstName2 + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName2 + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

/**
 * Variable mutation
 */ 

age = 'twenty eight';
job = 'driver';

console.log(firstName2 + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName2 + ' ' + lastName);
