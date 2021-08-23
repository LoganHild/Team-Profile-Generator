const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(office) {
        this.office = office;
    }
    getRole();//overridden to return Manager
}