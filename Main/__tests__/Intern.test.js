const {describe, expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe ('Intern', () => {
        it('Can set school via constructor arguments', () => {
            const newSchool = 'UofM';
            const newIntern = new Intern('name', 1, 'email', newSchool);
            expect(newIntern.school).toEqual(newSchool);
        })
        it(`getRole() should return "Intern"`, () => {
            const newIntern = new Intern();
            expect(newIntern.getRole()).toBe('Intern');
        })
        it(`Can get school via getSchool()`, () => {
            const newIntern = new Intern('name', 1, 'email', 'UofM');
            expect(newIntern.getSchool()).toEqual('UofM');
        })
})