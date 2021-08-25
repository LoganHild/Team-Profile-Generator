const {describe, expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe ('Manager', () => {
        it('Can set office number via constructor argument', () => {
            const newOffice = 614;
            const newManager = new Manager('name', 5, 'email', newOffice);
            expect(newManager.office).toEqual(newOffice);
        })
        it(`getRole() should return "Manager"`, () => {
            const newManager = new Manager();
            expect(newManager.getRole()).toBe('Manager');
        })
        it(`Can get office number via getOffice()`, () => {
            const newManager = new Manager('name', 5, 'email', 614);
            expect(newManager.getOffice()).toEqual(614);
        })
})