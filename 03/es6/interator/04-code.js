"use strict";

const house = ['Grifinória', 'Corvinal', 'Lufa-Lufa', 'Sonserina'];
const students = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

let count = 0;
const fazerSelecaoDaCasa = (house) => {

    
    for(let student of students) {
        
        if (house === 'Grifinória') {            
            console.log(house + ' | ' + student);
            continue;
        }

        count++;
        
    }

};

house.forEach(fazerSelecaoDaCasa);

console.log(count);