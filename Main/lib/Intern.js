const Employee = require('./Employee.js');

//extension of parent class
class Intern extends Employee {
    constructor(name, id, email, school) {

        //takes in data from parent
        super(name, id, email);
        this.school = school;
    }

    //Methods for returning data
    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
}

module.exports = Intern