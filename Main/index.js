const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const array = require('./src/generateTeam.js');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

const valid = (input) => {
    if(input === '' || input === undefined) {
        return"Please enter a value or use Ctrl C to restart."
    }
    return true
}
const manager = () => {
    console.log(chalk.yellowBright('Let\'s start by building your team!'))
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
            validate: valid
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id/?',
            validate: valid
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
            validate: valid
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the team manager\'s office number?',
            validate: valid
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
            message: chalk.underline.yellowBright('Which type of team member would you like to add?'),
            choices: options
        }
    ]).then((data) => {
        if (data.centralLobby === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your engineer\'s name?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your engineer\'s id?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your engineer\'s email?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your engineer\'s GitHub username?',
                    validate: valid
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
                    message: 'What is your intern\'s name?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your intern\'s id?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your intern\'s email?',
                    validate: valid
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your intern\'s school?',
                    validate: valid
                }
            ]).then((data) => {
                let newIntern = new Intern(data.name, data.id, data.email, data.school);
                employees.push(newIntern);
                lobby()
            });
        } else {
            buildTeam('./dist/index.html', array(employees));
        }
    })
}
function buildTeam(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(chalk.underline.greenBright('Success! File has been generated!'));
    });
}

manager();
