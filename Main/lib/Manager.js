//Manager Class
//Employee properties
//officeNumber
class manager extends Employee {
    constructor(office) {
        this.office = office;
    }
    getRole();//overridden to return Manager
}