"use strict";

const Pessoa = (function () { 

    const dadosPrivados = new WeakMap(); 
    
    function Pessoa(nome) { 
        
        dadosPrivados.set(this, { nome: nome }); 
    } 
    
    Pessoa.prototype.getNome = function () { 
        
        return dadosPrivados.get(this).nome; 
    }; 
    
    return Pessoa; 

}()); 

let rafael = new Pessoa('Rafael'); 

console.log(rafael.getNome()); // Rafael 
console.log(rafael.nome); // undefined 