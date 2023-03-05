// Classes that creat the manager, engeener, and intern

class Employee {
    // Makes a basek employee
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Manager extends Employee {
    // Extends The Employee Class to add a Manager
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    // Extends The Employee Class to add a Engineer
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }
}

class Intern extends Employee {
    // Extends The Employee Class to add a Intern
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }
}


module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};