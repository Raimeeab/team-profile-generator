// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Link to create page 
const generateHTML = require("./src/generateHTML");

// Team profiles
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");

// Empty array for team members
let managerInfo = [];
let engineerInfo = [];
let internInfo = [];

function buildMembers() {
    console.log("index.js => managerInfo" + managerInfo);
    console.log("index.js => egineerInfo" + engineerInfo);
    console.log("index.js => internInfo" + internInfo);

    // pass three prams to the erndorer and creating file
    let html = generateHTML(managerInfo, engineerInfo, internInfo)

    fs.writeFile("./dist/index.html", html)

};

const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Manager name:",
        // validate: ""
    },
    {
        type: "input",
        name: "id",
        message: "Manager id:",
    },
    {
        type: "input",
        name: "email",
        message: "Manager email:",
    },
    {
        type: "input",
        name: "office number",
        message: "Office number:",
    },
];



function appChoices() { 
    inquirer.prompt([
        {
            type: "list",
            name: "team",
            choices: ["Engineer", "Intern", "Complete"]
        }
    ]).
    then((choices) => {
        // Each choice will lead to a different function 
        switch(choices.team) {
            case "Engineer": 
                addEngineer();
                break;
            case "Intern": 
                addIntern();
                break;
            default:
                buildMembers();
        }
    })
}

function addEngineer() {
    console.log("working");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer name:",
            // validate: ""
        },
        {
            type: "input",
            name: "id",
            message: "Engineer id:",
        },
        {
            type: "input",
            name: "email",
            message: "Engineer email:",
        },
        {
            type: "input",
            name: "github",
            message: "GitHub username:",
        },
    ]).then((engineerAns) => {
        let engineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.github);
        engineerInfo.push(engineer);
        appChoices();
    })

}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern name:",
            // validate: ""
        },
        {
            type: "input",
            name: "id",
            message: "Intern id:",
        },
        {
            type: "input",
            name: "email",
            message: "Intern email:",
        },
        {
            type: "input",
            name: "school",
            message: "School name:",
        },
    ]).then((internAns) => {
        let intern = new Intern(internAns.name, internAns.id, internAns.email, internAns.school);
        internInfo.push(intern);
        appChoices();
    });

}

function init(){
    console.log(`-------------------------------------
    THE PROFESSIONAL TEAM PROFILE GENERATOR.
    
    Please input your team information at the prompts to create your projects team members.
-------------------------------------`);

inquirer.prompt(managerPrompts).then((managerAns) => {
    // create a new instance of manager 
    let manager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.officenumber);
    managerInfo.push(manager);
    appChoices();
});
}

init();