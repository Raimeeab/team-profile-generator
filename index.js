// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Link to create page 
const generatePage = require("./src/generateHTML");

// Team profiles
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

// Empty array for team members
const teamMembers = [];


const userPrompts = [
    {
        type: "input",
        name: "manager",
        message: "Manager of team:",
        // validate: ""
    },
    {

    }
]