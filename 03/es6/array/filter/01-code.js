let alunos = [
    {
        nome: 'João', idade: 15
    },
    {
        nome: 'José', idade: 18
    },
    {
        nome: 'Maria', idade: 50
    }
];

let alunosDeMaior = alunos.filter((aluno) => {
    return aluno.idade >= 18;
});

console.log(alunosDeMaior);