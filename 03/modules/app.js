// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)

//import * as R from 'ramda'

import { union as juntaTudo, uniq as soOsMesmos } from 'ramda'

import sum, { sub, multiplicao, div as dividir, PI } from './utils'

const arr1 = [1,1,1,2,2,3,4,5,6,6]
const arr2 = [5,6,6,7,7,8,9,10,1]

//const arr3 = R.union(arr1, arr2)
const arr3 = juntaTudo(arr1, arr2)
const arr4 = soOsMesmos(arr1)

console.log(arr3)
console.log(arr4)

console.log(sum(3, 5))
console.log(sub(4, 2))
console.log(multiplicao(5, 2))
console.log(dividir(12, 3))
console.log(PI)
console.log('Teste')