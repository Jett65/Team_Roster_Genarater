// takes the users input to generate a team roster.
const inquirer = require("inquirer");
const makeUser = require("./makeUser");
// inquire questions

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the employees name: "
    },

    {
        type: "input",
        name: "ID",
        message: "Enter the employees ID: "
    },

    {
        type: "input",
        name: "email",
        message: "Enter the employees email: "
    }

];

const managerQuestions = [
    {
        type: "input",
        name: "officeNum",
        message: "Enter the managers office number: "
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "githubName",
        message: "Enter the engineers GitHub username: "
    }
];

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Enter the interns School: "
    }
];

const menuChoices = [
    {
        type: "list",
        name: "choices",
        message: "What would you like to do next",
        choices: ["Add an engineer","Add an intern","Finish building my team"]
    }
];

function menu() {
    // displays the menu to the use
    let data
    console.log("fires",data)
    inquirer.prompt(menuChoices).then(answers => {
       data = answers.choices
       console.log("second",data)
    });
    console.log(`therd ${data}`)
    return data
}

function quesConcat(secarray) {
    // Concatenates two two arrays together
    const questions = employeeQuestions.concat(secarray);
    return questions;
}

function init() {
    // displays the questions when the app is started
    inquirer
        .prompt(quesConcat(managerQuestions))
        .then((data) => {
            const manObj = new makeUser.Manager(data.name,data.ID,data.email,data.officeNum);
            menu();
        });
}

menu()

module.exports = {
    menu
}
// TODO: Figer out the stuped menu funtion
