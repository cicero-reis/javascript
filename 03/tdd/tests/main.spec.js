import { expect } from 'chai'
import FizzBuzz from '../src/fizzbuzz'

describe('FizzBuzz', () => {

    it('Should return `Fizz` when multilple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz')
        expect(FizzBuzz(6)).to.be.equal('Fizz')
    })

    it('Should return`Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz')
        expect(FizzBuzz(10)).to.be.equal('Buzz')
    })

    it('Should return `FizzBuzz` when multiple of 3 and 5', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
    })

    it('Should return the `FizzBuzz` when non-multilple', () => {
        expect(FizzBuzz(7)).to.be.equal(7)
    })

    it('Should return 0 when 0', () => {
        expect(FizzBuzz(0)).to.be.equal(0)
    })

})