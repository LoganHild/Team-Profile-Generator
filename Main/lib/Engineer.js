//Engineer Class
//Employee properties
//github
class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub();
    getRole(); //overridden to return Engineer
}