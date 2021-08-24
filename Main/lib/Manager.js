const Employee = require('./Employee.js');

//extension of parent class
class Manager extends Employee {
    constructor(name, id, email, office) {

        //takes in data from parent class
        super(name, id, email)
        this.office = office;
    }

    //Method for returning data
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;