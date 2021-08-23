const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const generateTeam = require('./src/generateTeam.js');

//Manager
//What is the Team Manager's name?
//id? email? office number?
const options = [
    'Engineer',
    'Intern',
    'I don\'t want to add any more team members'
];

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager\'s name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the team manager\'s id/?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team manager\'s email?'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the team manager\'s office number?'
    },
    {
        type: 'list',
        name: 'centralLobby',
        message: 'Which type of team member would you like to add?',
        choices: options
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is your engineer\'s name?',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is your engineer\'s id?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your engineer\'s email?'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is your engineer\'s GitHub username?'
    },
    {
        type: 'list',
        name: 'centralLobby',
        message: 'Which type of team member would you like to add?',
        choices: options
    },
    {
        type: 'input',
        name: 'internName',
        message: 'What is your intern\'s name?'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is your intern\'s id?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your intern\'s email?'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is your intern\'s school?'
    },
    {
        type: 'list',
        name: 'centralLobby',
        message: 'Which type of team member would you like to add?',
        choices: options
    }
]

//Maybe a success message after finishing the team profile

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success! File has been generated!');
    });
}
function init() {
    inquirer.prompt(questions)
      .then((data) => {
          writeToFile('team.html', generateTeam(data));
      });
}

init();
//Then creates html file in output folder
//use regular html code just like the read-me Generator