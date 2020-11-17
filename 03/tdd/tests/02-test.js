// Teste 02

describe('Main', function() {

    // roda uma vez, antes do bloco
    before(function() {
        console.log('Before')
    })

    // roda uma vez, depois do bloco
    after(function() {
        console.log('After')
    })

    // roda todas as vezes, antes de cada bloco
    beforeEach(function() {
        console.log('BeforeEach')
    })

    // rosa todas as vezes, depois de cada bloco
    afterEach(function() {
        console.log('AfterEach')
    })

    it('teste 01', function() {
        console.log('Teste 01')
    })

    it('teste 02', function() {
        console.log('Teste 02')
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