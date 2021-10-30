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

// Check to see if index.html file already exists 

// import {read, close} from 'fs';

const check = () => {
    if(fs.existsSync('./dist/index.html')) {
        inquirer.prompt(
            {
                type: "confirm",
                message: "It seems 'index.html' already exists, should you continue your existing file will be overwritten.",
                name: "overwrite",
            }).then(async(response) => {
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    init();
                } else if (await overwrite === false) {
                    console.log("Type 'Ctrl + C' to quit");
            };
        });
    } else { 
        init();
    };
};
// fs.existsSync('./dist/index.html', (err) => {
//     if (err) 
//         init();
//     else {
//         inquirer.prompt({
//             type: "list",
//             name: "overwrite",
//             message: "It seems 'index.html' already exists, should you continue your existing file will be overwritten.",
//             choices: ["Continue", "Quit"],
//         }).then((choices) => {
//             switch(choices.overwrite) {
//                 case "Continue":
//                     init();
//                     break;
//                 case "Quit":
//                     console.log("Type 'Ctrl + C' to quit")
//             }
//         })
//     }

// })

// Build index.html file
function buildHTML() {

    // Parse data into generateHTML arguments
    let html = generateHTML(managerInfo, engineerInfo, internInfo)
    fs.writeFile("./dist/index.html", html, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully in index.html\n");
        }
      });

};

// Loop choice to add a new role until complete is pressed
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
                buildHTML();
        }
    })
}

// Add Engineer(s)
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer name:",
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

// Add Intern(s)
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

function init(){
    console.log(`-------------------------------------
    THE PROFESSIONAL TEAM PROFILE GENERATOR.
    
    Please input your team information at the prompts to create your projects team members.
-------------------------------------`);

inquirer.prompt(managerPrompts).then((managerAns) => {
    // create a new instance of manager and save data in empty array
    let manager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.officenumber);
    managerInfo.push(manager);
    addRole();
});
}

