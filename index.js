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
    name: "Title"
}, {
    //Description of project
    type: "input",
    message: "What is the project about? (Detailed description)",
    name: "Description"
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
    name: 'installationInstruction'
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
    name: 'contributionExplanation'
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
  },
  //email
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  //additional contact info
  {
    type: 'input',
    name: 'contact',
    message: 'List instructions on how to contact you',
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



