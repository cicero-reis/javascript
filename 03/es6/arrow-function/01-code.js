'use strict';

const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],
    membrosDaEquipe: function() {
        this.membros.forEach(membro => {
            console.log(`${membro} é da equipe ${this.nome}`);
        })
    }
}

equipe.membrosDaEquipe();


function facaLagoComMeuNome(nome, callback = z => {
    console.log(z);
}){
    callback(nome);
};

facaLagoComMeuNome('Fulano');
