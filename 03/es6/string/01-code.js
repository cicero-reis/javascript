'use strict';

let name = 'Fulano da Silva';
let age = 45;
let address = 'Stret New York';

console.log(`Boa tarde!, ${name}.`);

console.log('----------------------------');

const n1 = 2, n2 = 5;

console.log(`Soma: ${n1} + ${n2} = ${n1 + n2}`);

console.log(`
exibindo 
uma 
palavra 
por 
linha`
);

console.log('----------------------');

const div = 
`<div>
    <p><b>Nome:</b> ${name}</p>
    <p><b>Idade:</b> ${age}</p>
    <p><b>Endereço:</b> ${address}</p> 
</div>`; 

console.log(div);

console.log('----------------------');

const hours = new Date().getHours();

const message = defineMessage`${""}${hours} hours`;

function defineMessage(strings, ...values) {

    const hour = values[1];

    if (hour >= 1 && hour <= 12) {

        values[0] = "Good Morning";

    } else if (hour > 12 && hour <= 18) {

        values[0] = "Good afternoon";
        
    } else {

        values[0] = "Good evening";

    }

    values[0] = `${values[0]}, are `;
    
    console.log(values[0]);
    //return `${values[0]}`;
}


defineMessage();