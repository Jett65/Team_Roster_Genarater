// takes the users input to genatrat a team roster.

//const makeUser = require("./makeUser")
const inquirer = require("inquirer")

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
