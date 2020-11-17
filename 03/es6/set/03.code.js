"use strict";

const set = new Set([
    {          
        'name': 'Fulano',
        'age': 30,        
        'addres': [    
            {
                'streat': 'New Streat',
                'number': 234,
                'state': 'Dão Paulo'
            }
        ]
    }
    
]);

for (let value of set) {
    console.log(value);
}

console.log('------------------------------');

for (let value of set) {
    console.log(value.addres[0].streat);
}