// takes the users input to generate a team roster.
const inquirer = require("inquirer");
const makeUser = require("./makeUser");
const htmlGen = require("./htmlGenerator");
const fs = require("fs");

// inquire questions

const fileName = "./index.html";
const htmlCard_lists = [];

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


function init() {
    // initializes the app

    const menu = () => {
        inquirer
            .prompt(menuChoices)
            .then((result) => {

                if (result.choices === "Add an engineer") {
                    inquirer
                        .prompt(quesConcat(engineerQuestions))
                        .then((result) => {
                            const engObj = new makeUser.Engineer(result.name,result.ID,result.email,result.githubName);
                            htmlCard_lists.push(htmlGen.engineer(engObj));
                            menu();
                        });

                } else if (result.choices === "Add an intern") {
                    inquirer
                        .prompt(quesConcat(internQuestions))
                        .then((result) => {
                            const intObj = new makeUser.Intern(result.name,result.ID,result.email,result.school);
                            htmlCard_lists.push(htmlGen.intern(intObj));
                            menu();
                        });

                } else {
                    console.log("Thanks You");
                    const fileString = htmlGen.generateHtml(htmlCard_lists);
                    console.log(typeof (fileString));
                    writeToFile(fileString);
                }
            });
    };

    inquirer
        .prompt(quesConcat(managerQuestions))

        .then((result) => {
            const manObj = new makeUser.Manager(result.name,result.ID,result.email,result.officeNum);
            htmlCard_lists.push(htmlGen.manager(manObj));
            menu();

        }).catch((err) => {
            console.log("error");
        });
}


init();