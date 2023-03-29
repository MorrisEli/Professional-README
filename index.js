// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
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

  function writeFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if(error) {
            return console.log('There was an error ; ' + error);
        }
    })
  }



  async function init() {
    try {
        const userAnswers = await inquirer.promp(questions);
        console.log('The current data is being processed into README.d: ', userAnswers);

        const myMarkdown = generateMarkdown(userAnswers);
        console.log(myMarkdown);
        await createReadMe('README1.md', myMarkdown);
        
    } catch (error) {
        console.log('There was an error' + error);
    }
  };

  init();



