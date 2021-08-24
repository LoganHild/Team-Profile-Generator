const Employee = require('./Employee.js');

//extension of parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        //takes in data from parent
        super(name, id, email);
        this.github = github;
    }

    //Methods for returning data
    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    }; 
}

module.exports = Engineer;