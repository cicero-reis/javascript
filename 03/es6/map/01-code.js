"use strict";

const map = new Map();

function funcao() {};

const objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma função");

// propriedade get
console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

//propriedade size
console.log('Tamanho: ' , map.size);

//propriedade has
console.log(map.has("string"));
console.log(map.has("abc"));

//propiedade delete
map.delete("string");
console.log(map.has("string"));

//propriedade clear
map.clear();
console.log("Tamanho: ", map.size);

const map1 = new Map();

map1.set('um', 1);
map1.set('dois', 2);
map1.set('tres', 3);

for(let chave of map1.keys()) {
    console.log(chave);
}

for(let valor of map1.values()) {
    console.log(valor);
}

for(let entrada of map1.entries()) {
    console.log(entrada);
}