'use strict'

let numero = [1,2,3,4,5,6,7,8,9];

for (const iterator of numero) {
            
            if(iterator == 2) {
                        continue;
            }

            console.log(iterator);
            
}