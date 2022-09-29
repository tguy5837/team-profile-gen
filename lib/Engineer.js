const Employee = require('../lib/Employee')

class Engineer {
    constructor(github) {
        this.github = github;

    }
};

Engineer.prototype = Object.create(Employee.prototype);

module.exports = Engineer;