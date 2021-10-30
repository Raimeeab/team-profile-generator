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

    // Parse data into function arguments
    let html = generateHTML(managerInfo, engineerInfo, internInfo)
    fs.writeFile("./dist/index.html", html, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });

};

const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Manager name:",
    },
    {
        type: "input",
        name: "id",
        message: "Manager id:",
        // validate: (value) => {
        //     if(isNaN(value)){
        //         return true;
        //     } else {
        //         console.log("Please enter a number.");
        //         return false;
        //     }
        // }
    },
    {
        type: "input",
        name: "email",
        message: "Manager email:",
    },
    {
        type: "input",
        name: "officenumber",
        message: "Office number:",
    },
];



function addRole() { 
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            choices: ["Engineer", "Intern", "Complete"]
        }
    ]).
    then((choices) => {
        // Each choice will lead to a different function 
        switch(choices.role) {
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
        addRole();
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
        addRole();
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
    addRole();
});
}

init();