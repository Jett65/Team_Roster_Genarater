// takes the users input to generate a team roster.
const inquirer = require("inquirer");
const {
    Manager,
    Engineer,
    Intern
} = require("./lib/makeUser");
const {
    addManager,
    addEngineer,
    addIntern,
    generateHtml
} = require("./src/htmlGenerator");
const fs = require("fs");



const fileName = "./dist/index.html";
const employees = [];

async function createManager() {
    const results = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team managers name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team managers ID",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manages email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the managers office Number",
        }
    ]);
    const manager = new Manager(results.name,results.id,results.email,results.officeNumber);
    employees.push(addManager(manager));
}

async function createEngineer(l) {
    const results = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineers name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineers id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineers email"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineers Github username"
        }
    ]);
    const engineer = new Engineer(results.name,results.id,results.email,results.github);
    employees.push(addEngineer(engineer));
    await menu();
}

async function createIntern() {
    const results = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the interns name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the interns ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the interns email"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the interns school"
        }
    ]);
    const intern = new Intern(results.name,results.id,results.email,results.school);
    employees.push(addIntern(intern));
    await menu();
}

async function menu() {
    const results = await inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "Choose the next action",
            choices: ["Add Engineer","Add Intern","Finish building Team"]
        }
    );
    if (results.role === "Add Engineer") {
        await createEngineer();
    } else if (results.role === "Add Intern") {
        await createIntern();
    } else (
        console.log("Thanks You")
    );
}

function writeToFile(data) {
    fs.writeFile(fileName,data,(err) =>
        err ? console.error(err) : console.log("File GEnerated")
    );
}

async function init() {
    await createManager();
    await menu();
    const data = generateHtml(employees);
    writeToFile(data);
}

init();