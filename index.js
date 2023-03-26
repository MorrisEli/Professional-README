// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",

    validate: nameInput => {
        if(nameInput) {
            return true;
        } else {
            console.log('Enter Project Title')
            return false;
        }
    }
}, {
    type: "input",
    message: "What is the project about? (Detailed description)",
    name: "Description"
    validate: nameInput =>
        if (nameInput) {
            return true;
        } else {
            console.log('Enter Descrpiption of your project.');
            return false;
        }
    }
},
{
    type: 'confirm',
    message: 'Is there an installation process?',
    name: 'confirmInstallation'
},
{
    type: 'input',
    message: 'Is there an installation?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Installation instructions',
    name: 'installationInstruction'
    When: ({ Installation }) => {
        if(Installation) {
            return true;
        } else {
            return falsel;
        }

    }
}



}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run this app?",
    name: "Insatllation"
}, {
    type:
    message:
    name: 
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.write(fileName, data, error => {
        if (error) {
            return console.log('There was an error : ' + error);
        }
    })
}


const createReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app
function init() {
    try {
        const userAnswers = await inquirer.prompt(questions);
        const myMarkdown = generateMarkdown(userAnswers);
        console.log(myMarkdown);
        await createReadMe('README.md', myMarkdown);
    }
}

// Function call to initialize app
init();