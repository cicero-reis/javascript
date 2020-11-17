/** 
 * Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado 
 * com base em elementos de todo o array.
 * Exemplo: soma de lançamentos de foguetes orbitais no período de 1 ano.
 */

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce( function( prevVal, elem ) {
    return prevVal + elem.launches;
}, 0);

// ES6
// rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 ); 

console.log(sum); // 85