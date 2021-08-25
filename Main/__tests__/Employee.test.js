const { describe, expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe ('Employee', () => {
        it('Can instantiate Employee instance', () => {
            const newEmployee = new Employee();
            expect(typeof newEmployee).toBe('object');
        })
        it('Can set name via constructor arguments', () => {
            const newName = 'Logan';
            const newEmployee = new Employee(newName, 5, 'email');
            expect(newEmployee.name).toBe(newName);
        })
        it('Can set id via constructor arguments', () => {
            const newId = 614;
            const newEmployee = new Employee('name', newId, 'email');
            expect(newEmployee.id).toEqual(newId);
        })
        it('Can set email via constructor arguments', () => {
            const newEmail = 'hildebrandtlogan@gmail.com';
            const newEmployee = new Employee('name', 5, newEmail);
            expect(newEmployee.email).toBe(newEmail);
        })
        it('Can get name via getName()', () => {
            const newName = 'Logan';
            const newEmployee = new Employee(newName, 5, 'email');
            expect(newEmployee.getName()).toBe(newName);
        })
        it('Can get id via getId()', () => {
            const newId = 1;
            const newEmployee = new Employee('name', newId, 'email');
            expect(newEmployee.getId()).toBe(newId);
        })
        it('can get email via getEmail()', () => {
            const newEmail = 'hildebrandtlogan@email.com';
            const newEmployee = new Employee('name', 5, newEmail);
            expect(newEmployee.getEmail()).toBe(newEmail);
        })
        it(`getRole() should return "Employee"`, () => {
            const newEmployee = new Employee();
            expect(newEmployee.getRole()).toBe('Employee');
        })
})