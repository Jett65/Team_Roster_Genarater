// takes the users input to genatrat a team roster.

const makeUser = require("./makeUser");
const inquirer = require("inquirer");

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

]

const managerQuestions = [
    {
        type: "input",
        name: "offeceNum",
        message: "Enter the managers office number: "
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "githubName",
        message: "Enter the engineers GitHub username: "
    }
] 

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Enter the interns School: "
    }
]

const menueChoices = [
    {
        type: "list",
        name: "choices",
        message: "What would you like to do next"
        choices: ["Add an engineer", "Add an intern", "Finish building my team"]
    }
]

function menu() {
    // displays the menu to the user
    inquirer
        .prompt(menueChoices)    
        .then((data) => {
            
        });
    
}

function init() {
    // displays the questions when the app is started
    inquirer
        .prompt(employeeQuestions)
        .then((data) => {
            inquirer
                .prompt(managerQuestions)
                .then((data) => {
                    menu()
                });
        });
}
