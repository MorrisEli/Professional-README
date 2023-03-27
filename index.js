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
        if(nameInput) {
            return true;
        } else {
            console.log('Enter Project Title')
            return false;
        }
    }
}, {
    //Description of project
    type: "input",
    message: "What is the project about? (Detailed description)",
    name: "Description",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter Descrpiption of your project.');
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
    message: 'Is there an installation?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Installation instructions',
    name: 'installationInstruction',
    When: ({ Installation }) => {
        if(Installation) {
            return true;
        } else {
            return false;
        }

    }
},
//instructions
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Are there any instructions you would like to give?'
},
{
    type: 'input',
    message: 'List instructions',
    name: 'Instructions',
    when: ({ confirmUsage }) => {
        if (Instructions) {
            return true;
        } else {
            return false;
        }
    }
},
//contribution
{
    type: 'confirm',
    message: 'Can other developers contribute to your project?',
    name: 'Contribution'
},

{
    type: 'input',
    message: 'Explain how others can contribute',
    name: 'contributionExplanation',
    when: ({ Contribution }) => {
        if (Contribution) {
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
    message: 'Explain how to test your application',
    name: 'Test',
    when: ({ confirmTest }) => {
        if (confirmTest) {
            return true;
        } else {
            return false;
        }
    }
},
//license
{
    type: 'checkbox',
    message: 'Choose a license',
    name: 'License',
    choices: ["APACHE 2.0", "MIT", "NONE"],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Select a license');
            return false;
        }
    }
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
        console.log('Please enter your GitHub username.');
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
            return true;
        } else {
            console.log('Enter your email address');
            return false;
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

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log('There was an error: ' + error);
        }
    })
  }

  const createReadMe = util.promisify(writeToFile);

  async function init() {
    try {
        const userAnswers = await inquirer.createPromptModule(questions);
        console.log('Success! The data is being put into your ReadMe.md: ', userAnswers);

        const myMarkdown = generateMarkdown(userAnswers);
        console.log(myMarkdown);
        await createReadMe('README1.md', myMarkdown);

    } catch (error) {
        console.log('There was an error' + error);
    }
  };

  init();



