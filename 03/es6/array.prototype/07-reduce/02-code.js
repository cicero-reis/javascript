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

let nomes = alunos.reduce( (ArrayNomes, aluno) => {
    ArrayNomes.push(aluno.nome);
    return ArrayNomes;
}, []);

console.log(nomes);