// Classes that creat the manager, engeener, and intern

class Employee {
    // Makes a basek employee
    constructor(name,ID,email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
}

class Manager extends Employee {
    // Uses the Employee class and addes the managers remaning criterea
    constructor(name,ID,email,officeNumber) {
        super(name,ID,email);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    // Uses the Employee class add addes the engeener criterea
    constructor(name, ID, email, github) {
        super(name,ID,email);
        this.github = github;
    }
}

class Intern extends Employee {
    // Uses the Employee class and addes the intern criterea
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
}

const name = new Manager("name");

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};