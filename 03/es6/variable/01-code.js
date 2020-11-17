"use strict";

let value = 0;

if (true) {

    // novo escopo, o TDZ do 'value' começa.

    //Ao tentar accessar a variável, tomamos ReferenceError,
    // pois neste momento ela é uma variável
    // que não fo inicializada.
    //console.log(value);// ReferenceError

    let value; //TDZ termina e 'valor' é definida com undefined
    console.log(value); //undefined

    value = 1;
    console.log(value); //1


}

console.log(value);

const PORT = 3000;

if (true) {

    console.log(PORT);

}

//PORT = 5000;
//console.log(PORT); //TypeError: Assignment to constant variable

console.log(PORT);