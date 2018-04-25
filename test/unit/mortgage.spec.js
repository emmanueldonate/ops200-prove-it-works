const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(700000, 7.5, 70)
    }); 

    it('should have a mortgage function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a principal = 700,000', () => {
        expect(mortgage.principal).to.equal(700000)
    });

    it('should have the interest = 7.5%', () => {
        expect(mortgage.interest).equal(7.5);
    });

    it('should have the term = 70 years', () => {
        expect(mortgage.term).to.equal(70);
    });
});