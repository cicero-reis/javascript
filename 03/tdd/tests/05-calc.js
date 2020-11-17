import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/calc'

describe('Calc', () => {

    // smoke tests
    describe('Smoke tests', () => {

        it('Should exist the calc lib', () => {
            expect(sum).to.exist
        })

        it('Should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a.function;
        })

        it('Should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a.function;
        })

        it('Should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a.function;
        })

        it('Should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a.function;
        })

    })

    describe('Sum', () => {
        it('Should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4)
        })
    })

    describe('Sub', () => {
        it('Should return 4 when `sub(6,2)`', () => {
            expect(sub(6,2)).to.be.equal(4)
        })
    })

    describe('Sub', () => {
        it('Should return -4 when `sub(2,6)`', () => {
            expect(sub(2,6)).to.be.equal(-4)
        })
    })

    describe('Mult', () => {
        it('Should return 10 when `mult(2,5)`', () => {
            expect(mult(2,5)).to.be.equal(10)
        })
    })

    describe('Div', () => {
        it('Should return 5 when `div(10,2)`', () => {
            expect(div(10,2)).to.be.equal(5)
        })
        it('Should return `Não é possível devisão por zero!` when divide by 0', () => {
            expect(div(10,0)).to.be.equal('Não é possível dividor por zero')
        })
    })

})