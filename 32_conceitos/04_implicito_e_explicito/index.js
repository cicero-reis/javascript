/**
 * COERÇÃO
 */
console.log('5' + 5) // 55
console.log('5' - 5) // 0
console.log(true + 1) // 2
console.log(true + true) // 2
console.log({} + {}) 
console.log([] + []) 
console.log([] + {})

/**
 * Implicito
 */
console.log(+'5') // 5
console.log(5 + '') // 5
console.log(123 && 'oi') // oi
console.log(null || true) // true

/**
 * Explicito
 */
console.log(Number('50')) // 50
console.log(String(50)) // 50
