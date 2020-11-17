"use strict";

/**
 * Exemplo: usando map genericamente
 */

 const map = Array.prototype.map;

 const ascii = map.call('Hello World', (x) => {
     return x.charCodeAt(0);
 });

 console.log(ascii);