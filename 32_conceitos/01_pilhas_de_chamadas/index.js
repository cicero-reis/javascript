/**
 * FIFO: first in first out 
 * O primeiro que entrou é o primeiro a sair
 * LIFO: last in first out
 * O ultimo a entrar e o primeiro a sair
 */

 function funcao1() {
   funcao2()
   console.log('Função 1')
 }

 function funcao2() {
   funcao3()
   console.log('Funcão 2')
 }

 function funcao3() {
   console.log('Funcão 3')
 }

 funcao1()