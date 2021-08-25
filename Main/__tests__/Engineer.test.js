const {describe,  expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe ('Engineer', () => {
        it('Can set GitHub account via constructor', () => {
            const newGithub = 'LoganHild';
            const newEngineer = new Engineer('name', 5, 'email', newGithub);
            expect(newEngineer.github).toEqual(newGithub);
        })
        it(`getRole() should return "Engineer"`, () => {
            const newEngineer = new Engineer();
            expect(newEngineer.getRole()).toBe('Engineer');
        })
        it(`getGithub() should return the github username`, () => {
            const newGithub = 'LoganHild';
            const newEngineer = new Engineer('name', 5, 'email', newGithub);
            expect(newEngineer.getGithub()).toEqual(newGithub);
        })
})