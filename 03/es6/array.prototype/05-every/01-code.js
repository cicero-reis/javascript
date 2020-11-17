'use strict';

let alunos = [
    { nome: 'Maria', idade: 12 },
    { nome: 'José', idade: 17 },
    { nome: 'Pedro', idade: 20 },
    { nome: 'Marta', idade: 55 },
    { nome: 'Raul', idade: 45 },
    { nome: 'Paulo', idade: 9 },
    { nome: 'Debora', idade: 47 },
    { nome: 'Carla', idade: 22 },
    { nome: 'Sofia', idade: 34 },
    { nome: 'Cintia', idade: 16 },
];

let todosOsAlunosDeMaiorIdade = alunos.filter( (aluno) => {
    return aluno.idade >= 18;
});


let temAlunosMaiorDeIdade = todosOsAlunosDeMaiorIdade.every( (aluno) => {
    return aluno.idade >= 18;
});

function teste() {
    
    if(todosOsAlunosDeMaiorIdade) {
        console.log('Ok');
    }

}

teste();

const numberOne = [12, 5, 8, 130, 44];
const numberTwo = [12, 15, 88, 130, 44];

console.log(numberOne.every(elem => elem >= 10) ? 'true' : 'false');
console.log(numberTwo.every(elem => elem >= 10) ? 'true' : 'false');