let numeros = [1,2,3,4,5];

let soma = 0;

soma = numeros.reduce((soma, numero) => {
    return soma + numero;
}, 0);

console.log(soma);