// Classes that creat the manager, engeener, and intern

class Employee {
    // Makes a basek employee
    constructor (name, ID, email) {
        this.name = name
        this.ID = ID
        this.email = email
    } 
}

class Manager extends Employee {
    // Uses the Employee class and addes the managers remaning criterea
    constructor (officeNumber) {
        this.officeNumber = officeNumber
    }
}

class Engineer extends Employee {
    // Uses the Employee class add addes the engeener criterea
    constructor (github) {
        this.github = github
    }
}

class Intern extends Employee{
    // Uses the Employee class and addes the intern criterea
    constructor (school) {
        this.school = school
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}
