'use strict';

let alunos = [
    { nome: 'Maria'},
    { nome: 'José'},
    { nome: 'Pedro'},
    { nome: 'Marta'},
    { nome: 'Raul'},
    { nome: 'Paulo'},
    { nome: 'Debora'},
    { nome: 'Carla'},
    { nome: 'Sofia'},
    { nome: 'Cintia'}
];

let buscaALuno = alunos.find((aluno) => {
    return aluno.nome = 'Cintia';
}); 

console.log(buscaALuno);