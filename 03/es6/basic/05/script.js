// Operator precedence

let now = 2020
let yearJohn = 1972
let fullAge = 18

// Multiple operators
let isFullAge = now - yearJohn >= fullAge // true
console.log(isFullAge)

// Grouping
let ageJohn = now - yearJohn
let ageMark = 35
let average = (ageJohn + ageMark) / 2;
console.log(average)

// Multiple assignments
let x, y
x = y = (3 + 5) * 4 - 6
console.log(x, y)

// More operators
x *= 2
x += 10
x--
console.log(x)