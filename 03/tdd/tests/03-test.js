// Teste 03

describe('Main', function() {

    var arr;

    // Roada uma vez, antes do bloco
    before( function() {
        // Inicia uma conexão com o banco
        // ou
        // criar um conjunto de dados
    })

    // Roda uma vez. depois do bloco
    after( function() {
        // Fecha conexao do banco
        // ou
        //apagar esse conjunto de dados
    })

    // Roda todas as vezes, antes de CADA bloco
    beforeEach( function() {
        arr = [1,2,3]
    })

    // Roda todas as vezes, depois de CADA bloco
    afterEach( function() {

    })

    it('should have a size of 4 when push another value to the array', function() {
        arr.push(4)
        console.log(arr.length) // 4
    })

    it('should remove the value 3 when use pop in the array', function() {
        console.log(arr.pop() === 3) // true
    }) 

    it('should have a size of when pop a value from the array', function() {
        arr.pop();
        console.log(arr.length) // 2
    })
})

// before
// beforeEach
// teste 01
// afterEach
// beforeEach
// teste 02
// afterEach
// after