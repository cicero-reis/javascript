"use strict";

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator

// Friends - um array de objetos.
// Onde o campo "books" é a lista de livros favoritos.

const friends = [
    {
        name: 'Anna',
        books: ['NodeJS', 'PHP'],
        age: 21
    },
    {
        name: 'Bob',
        books: ['War and peace', 'Greem'],
        age: 26
    },
    {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }

];


// allbooks - lista que contém todos os livros de friends +
// lista adicional contida em valorInicial

const allbooks = friends.reduce( (prev, curr) => {

    return [...prev, ...curr.books];

}, ['Alphabet']);

console.log(allbooks);