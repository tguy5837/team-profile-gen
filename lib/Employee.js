class Employee {
    // constructor
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // returns name of employee
    getName() {
        return this.name;
    }
    //returns id of employee
    getId() {
        return this.id;
    }
    // returns email
    getEmail() {
        return this.email;
    }
    // returns 'Employee'
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;