// takes the users input to generate a team roster.
const inquirer = require("inquirer");
const makeUser = require("./makeUser");
const htmlGen = require("./htmlGenarator");
const fs = require("fs");
// inquire questions

const fileName = "index.html";
const htmlCard_lists = [];
let loop = true;

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

function writeToFile(filename,data) {
    // writs the content to a file
    fs.writeFile(filename,data, function(err){
        if (err) throw err
    });
    return "File Generated";
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
                            const engObj = new makeUser.Engineer(result.name,result.ID,result.email,result.github);
                            htmlCard_lists.push(engObj);
                            menu()
                        });

                } else if (result.choices === "Add an intern") {
                    inquirer
                        .prompt(quesConcat(internQuestions))
                        .then((result) => {
                            const intObj = new makeUser.Intern(result.name,result.ID,result.email,result.school);
                            htmlCard_lists.push(intObj);
                            menu()
                        });

                } else {
                    console.log("Thanks You");
                    //console.log(htmlGen.genarateHtml(htmlCard_lists))
                    console.log(htmlGen.manager(htmlCard_lists(0)))
                }
            });
    };

    inquirer
        .prompt(quesConcat(managerQuestions))

        .then((result) => {
            const manObj = new makeUser.Manager(result.name,result.ID,result.email,result.officeNum);
            htmlCard_lists.push(manObj);
            menu() 
           
        }).catch((err) => {
            console.log("error");
        });
}


init();