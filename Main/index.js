const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const generateTeam = require('./src/generateTeam.js');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

const manager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id/?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the team manager\'s office number?'
        }
    ]).then((data) => {
          let newManager = new Manager(data.name, data.id, data.email, data.office);
          employees.push(newManager);
          lobby();
      });
}

const options = [
    'Engineer',
    'Intern',
    'I don\'t want to add any more team members'
];

const lobby = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'centralLobby',
            message: 'Which type of team member would you like to add?',
            choices: options
        }
    ]).then((data) => {
        if (data.centralLobby === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your engineer\'s name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your engineer\'s id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your engineer\'s email?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your engineer\'s GitHub username?'
                }
            ]).then((data) => {
                let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
                employees.push(newEngineer);
                lobby()
            });
        } else if (data.centralLobby === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your intern\'s name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your intern\'s id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your intern\'s email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your intern\'s school?'
                }
            ]).then((data) => {
                let newIntern = new Intern(data.name, data.id, data.email, data.school);
                employees.push(newIntern);
                lobby()
            });
        } else {
            buildTeam();
        }
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success! File has been generated!');
    });
}

function buildTeam(data) {
    writeToFile('myTeam.html', generateTeam(data));
}
manager();

