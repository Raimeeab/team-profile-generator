// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Link to create page 
const generatePage = require("./src/generateHTML");

// Team profiles
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

// Empty array for team members
const teamMembers = [];


const userPrompts = [
    {
        type: "input",
        name: "name",
        message: "Employee name:",
        // validate: ""
    },
    {
        type: "input",
        name: "id",
        message: "Employee id:",
    },
    {
        type: "input",
        name: "email",
        message: "Employee email:",
    },
    {
        type: "list",
        name: "role",
        message: "Employee role:",
        choices: ["Manager", "Engineer", "Intern"]
    }
];