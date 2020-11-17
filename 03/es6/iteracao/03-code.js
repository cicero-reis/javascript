'use strict'

let perfil = {
            nome: 'Fulano',
            idade: 50,
            endereco: ['Rua Sete', 45, 'Centro', 'SP']
};

for (let key in perfil) {
            console.log(perfil[key]);
}