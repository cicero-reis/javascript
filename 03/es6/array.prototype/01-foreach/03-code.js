"use strict";

/**
 * Função para cópia de um objeto
 */

const student = [
    {
        name: "Fulano da Silva",
        age: "34",
        email: "fulano@gmail.com",
        address: [
            {
                street: "Rua Nova",
                number: 567,
                city: "Santo André",
                state: "SP"
            }
        ]
    },
    {
        name: "Maria da Silva",
        age: "34",
        email: "maria@gmail.com",
        address: [
            {
                street: "Rua Nova",
                number: 567,
                city: "Santo André",
                state: "SP"
            }
        ]
    }
   
];

const copy = (o) => {

    const copy = Object.create(Object.getPrototypeOf(o));
    const propNames = Object.getOwnPropertyNames(o); 

    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
        
    });

    return copy;

}

const copyStudent = copy(student);

