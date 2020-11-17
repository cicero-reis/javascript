/**
 * == e ===
 */

 // ==
 console.log(3 == '3') // true

 // 1º Se ambos são do mesmo tipo
 // null == undefined, se for, ele retorna true
 // number == string, se for, converte a string em numero
 // boolean == number. se for, ele converte o boolean em numero
 // boolean == string, se for, ele converte a string para boolean
 // objeto == primitivo, se for, ele converte o objeto numa string

 // ===
 console.log(3 === '3') // false
 console.log(3 === 3) // true

 // Validação para tipos
 console.log(typeof 'Fulano' === 'string') // true