'use strict';

/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

let nomes = ['Maria', 'José', 'Paulo', 'Marta', 'Silvia', 'Agenor'];

nomes.forEach((nome) => {

    console.log(nome);

});

console.log('----------------------------------');

nomes.push('Cintia');
nomes.push('Yuri');

const imprimeNome = (nome) => {
    console.log(nome)
}

nomes.forEach(imprimeNome);