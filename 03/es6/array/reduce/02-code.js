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


var nomes = alunos.reduce((arrayNomes, aluno) => {
    arrayNomes.push(aluno.nome);
    return arrayNomes;
}, []);

console.log(nomes);