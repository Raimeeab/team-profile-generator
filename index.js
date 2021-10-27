// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Link to create page 
const generatePage = require("./src/generateHTML");

// team profiles
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");