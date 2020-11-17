let pesoDasMalas = [12, 34, 21, 29];

let temMalaAcimaDoPeso = pesoDasMalas.some((pesoMala) => {
    return pesoMala > 30;
});

console.log(temMalaAcimaDoPeso);