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

let aluno = alunos.find((aluno) => {
    return aluno.nome == "José";
});

console.log(aluno);