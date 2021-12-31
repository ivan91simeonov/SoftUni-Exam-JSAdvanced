const companyAdministration = require ('./companyAdministration');
const {expect } = require ('chai');




describe('companyAdministration' , ()=> {
    describe('Test 1' , ()=> {
        it('1.1' , ()=> {
            expect(()=>companyAdministration.hiringEmployee('A' , 'Not' , 14)).to.throw(`We are not looking for workers for this position.`)
            expect(()=>companyAdministration.hiringEmployee('B' , 'Is' , 3)).to.throw(`We are not looking for workers for this position.`)
        })
        it('1.2' , ()=> {
            expect(companyAdministration.hiringEmployee('A' , 'Programmer' , 3)).to.be.equal('A was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('E' , 'Programmer' , 15)).to.be.equal('E was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('AA' , 'Programmer' , 10)).to.be.equal('AA was successfully hired for the position Programmer.')
        })
        it('1.3' , ()=> {
            expect(companyAdministration.hiringEmployee('BB' , 'Programmer' , 1 )).to.be.equal('BB is not approved for this position.')
            expect(companyAdministration.hiringEmployee('MM' , 'Programmer' , 2)).to.be.equal('MM is not approved for this position.')
            expect(companyAdministration.hiringEmployee('MM' , 'Programmer' , 0)).to.be.equal('MM is not approved for this position.')
        })
    })
    describe('Test 2' , ()=> {
        it('2.1' , ()=> {
            expect(()=>companyAdministration.calculateSalary('string')).to.throw('Invalid hours')
            expect(()=>companyAdministration.calculateSalary('2')).to.throw('Invalid hours')
            expect(()=>companyAdministration.calculateSalary(-1)).to.throw('Invalid hours')
        })
        it('2.2' , ()=> {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
            expect(companyAdministration.calculateSalary(200)).to.be.equal(4000)
            expect(companyAdministration.calculateSalary(250)).to.be.equal(4750)
        })
        it('2.3' , ()=> {
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400)
            expect(companyAdministration.calculateSalary(150)).to.be.equal(2250)
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150)
            expect(companyAdministration.calculateSalary(1)).to.be.equal(15)
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0)
        })
    })
    describe('Test 3' , ()=> {
        it('3.1' , ()=> {
            expect(()=> companyAdministration.firedEmployee([1,2] , 4)).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee('' , 0)).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee('' , '')).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee([] , -1)).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee(2 , -1)).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee(['a','b'] , 2)).to.throw('Invalid input')
            expect(()=> companyAdministration.firedEmployee(['a','b'] , 10)).to.throw('Invalid input')
        })
    })
    it('3.1' , ()=> {
        expect(companyAdministration.firedEmployee(['a', 'b'] , 1)).to.deep.equal('a')
        expect(companyAdministration.firedEmployee(['a', 'b'] , 0)).to.deep.equal('b')
        expect(companyAdministration.firedEmployee(['a', 'b' , 'c'] , 0)).to.deep.equal('b, c')
        expect(companyAdministration.firedEmployee(['a', 'b' , 'c' , 'd'] , 0)).to.deep.equal('b, c, d')
    })
})