// takes the users input to generate a team roster.
const inquirer = require("inquirer");
const {
    Manager,
    Engineer,
    Intern
} = require("./makeUser");
const htmlGen = require("./htmlGenerator");
const fs = require("fs");

// inquire questions

const fileName = "./index.html";
const employees = [];

// const employeeQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "Enter the employees name: "
//     },

//     {
//         type: "input",
//         name: "ID",
//         message: "Enter the employees ID: "
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "Enter the employees email: "
//     }

// ];

// const managerQuestions = [
//     {
//         type: "input",
//         name: "officeNum",
//         message: "Enter the managers office number: "
//     }
// ];

// const engineerQuestions = [
//     {
//         type: "input",
//         name: "githubName",
//         message: "Enter the engineers GitHub username: "
//     }
// ];

// const internQuestions = [
//     {
//         type: "input",
//         name: "school",
//         message: "Enter the interns School: "
//     }
// ];

// const menuChoices = [
//     {
//         type: "list",
//         name: "choices",
//         message: "What would you like to do next",
//         choices: ["Add an engineer","Add an intern","Finish building my team"]
//     }
// ];




// function init() {
//     // initializes the app

//     const menu = () => {
//         inquirer
//             .prompt(menuChoices)
//             .then((result) => {

//                 if (result.choices === "Add an engineer") {
//                     inquirer
//                         .prompt(quesConcat(engineerQuestions))
//                         .then((result) => {
//                             const engObj = new makeUser.Engineer(result.name,result.ID,result.email,result.githubName);
//                             htmlCard_lists.push(htmlGen.engineer(engObj));
//                             menu();
//                         });

//                 } else if (result.choices === "Add an intern") {
//                     inquirer
//                         .prompt(quesConcat(internQuestions))
//                         .then((result) => {
//                             const intObj = new makeUser.Intern(result.name,result.ID,result.email,result.school);
//                             htmlCard_lists.push(htmlGen.intern(intObj));
//                             menu();
//                         });

//                 } else {
//                     console.log("Thanks You");
//                     const fileString = htmlGen.generateHtml(htmlCard_lists);
//                     console.log(typeof (fileString));
//                     writeToFile(fileString);
//                 }
//             });
//     };

//     inquirer
//         .prompt(quesConcat(managerQuestions))

//         .then((result) => {
//             const manObj = new makeUser.Manager(result.name,result.ID,result.email,result.officeNum);
//             htmlCard_lists.push(htmlGen.manager(manObj));
//             menu();

//         }).catch((err) => {
//             console.log("error");
//         });
// }

function createManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team managers name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team managers ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manages email"
        },
        {
            type: "input",
            name: "officeNumber",
            massage: "Enter the managers office Number"
        }
    ])
        .then((result) => {
            const manager = new Manager(result.name,result.id,result.email,result.officeNumber);
            employees.push(manager);
        });
}

function createEngineer(name,id,email) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "Enter the Github username of the employee"
            }
        ])
        .then((result) => {
            const engineer = new Engineer(name,id,email,result.github);
            employees.push(engineer);
        });
}

function createIntern(name,id,email) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                massage: "Enter the School of the employ"
            }
        ])
        .then((result) => {
            const intern = new Intern(name,id,email,result.school);
            employees.push(intern);
        });
}

function createEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Choose the role of the new employee",
                choices: ["Engineer","Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "Enter the name of the employee"
            },
            {
                type: "input",
                name: "id",
                massage: "Enter the ID of the employee"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the email of the employee"
            }
        ])
        .then((result) => {
            if (result.role === "Engineer") {
                createEngineer(result.name,result.id,result.email);
            } else {
                createIntern(result.name,result.id,result.email);
            }
        });
}

function quesConcat(secArray) {
    // Concatenates two two arrays together
    const questions = employeeQuestions.concat(secArray);
    return questions;
}

function writeToFile(data) {
    fs.writeFile(fileName,data,(err) =>
        err ? console.error(err) : console.log("File GEnerated")
    );
}

createManager()
    .then(createEmployee);