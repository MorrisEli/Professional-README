// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

//title of project
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter your project title.');
            return false;
        }
    }
}, {
    //Description of project
    type: "input",
    message: "What is the project about? (Detailed description)",
    name: "Description",
    validate: nameInput => {
        if(nameInput) {
            return true;
        } else {
            console.log('Enter description.');
            return false;
        }
    }
},
//Installation process
{
    type: 'confirm',
    message: 'Is there an installation process?',
    name: 'confirmInstallation'
},
{
    type: 'input',
    name: 'Installation',
    message: 'List Installion instructions',
    when: ({confirmInstallation}) => {
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
    }
},
//instructions

//contribution
{
    type: 'confirm',
    message: 'Can other developers contribute to your project?',
    name: 'confirmContribution'
},
{
    type: 'input',
    message: 'Please explain how how others can contribute your project',
    name: 'confirmContribution',
    when: ({ confirmContribution }) => {
        if (confirmContribution) {
          return true;
        } else {
          return false;
        }
      }
},

//testing
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Is there any available testing?'
},
{
    type: 'input',
    message: 'Explain how to test application',
    name: 'Test',
    when: ({ testConfirm }) => {
        if (testConfirm) {
          return true;
        } else {
          return false;
        }
      }
},

{
    type: 'input',
    message: 'Explain how to test your application',
    name: 'Test'
},
//license
{
    type: 'checkbox',
    message: 'Choose a license',
    name: 'License',
    choices: ["APACHE 2.0", "MIT", "NONE"]
},
//github username
{
type: 'input',
name: 'username',
message: 'What is your GitHub username?',
validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Enter your GitHub username');
        return false;
    }
}
  },
  //email
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: nameInput => {
        if (nameInput) {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your email');
                return false;
            }
        }
    }
  },
  //additional contact info
  {
    type: 'input',
    name: 'contact',
    message: 'List instructions on how to contact you',
    validate: (nameInput) => {
        if (nameInput) {
            return true;
        } else {
            return false;
        }
    }
  }];

  function writeToFile(data) {
    console.log("Write to file")
    fs.writeFile("readme.md", data, (err) => {
        if (err) throw err;
    console.log("File saved");

    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    const bodyReadme = generateMarkdown({ ...answers});
    writeToFile(bodyReadme)
})


    .catch(error => {
        if (error.isTtyError) {
            console.log("error");
        } else {
            console.log("Success! the data is being put into your README.md");
        }
    });
  }

  const createReadMe = util.promisify(writeToFile);

  init();



