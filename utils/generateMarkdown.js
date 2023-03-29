// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
    let licenseOption = '${data.license}';
    let licenseLink = '';
    if (licenseOption === "APACHE 2.0") {
        licenseOption = 'ApacheLicense2.0';
        licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    };
    if (licenseOption === 'MIT License') {
        licenseOption = 'MITLicense';
        licenseLink = 'https://choosealicense.com/licenses/mit/';
      };
    if (licenseOption === "NONE"){
        choose = ""
        return choose
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {//Choices in index.js, if a license is selected than the currect URL is chosen
    let choose = "";
    if (license === "APACHE 2.0"){
        choose = "(https://opensource.org/licenses/Apache-2.0)"
        return choose
    } if (license === "MIT"){
     choose = "(https://opensource.org/licenses/MIT)"
     return choose
 } if (license === "NONE"){
    //empty string
     choose = ""
     return choose
 }
 } 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const bLink = renderLicenseBadge(license) + renderLicenseLink(license);
    return `##License
    ${bLink}
    
    `
};

// TODO: Create a function to generate markdown for README
let markdownTemplate = 

`# ${data.title}

![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)

## Description 

${data.Description}


`;

//seperating table of contents

let tableOfContents = 
`## Table of Contents`;
    if (data.installation) {
        tableOfContents +=
        `
        * [Installation](#Installation)`
    };
    if (data.installation) {
        tableOfContents +=
        `
        *[Installation](#Installation)
        `
    };
    if (data.Contribution) {
        tableOfContents += 
        `
        * [Contribution](#Contribution)
        `
    };
    if (data.testing) {
        tableOfContents +=
          `
      * [Testing](#testing)`
      };

      //append
      markdownTemplate += tableOfContents;

      markdownTemplate +=
      `
      * [Questions](#questions)`;
  markdownTemplate +=
    `
  * [License](#license)
      `;

      if (data.Installation) {
        markdownTemplate +=
        `
## Installation

${data.Installation}`
      };

if (data.Instructions) {
    markdownTemplate +=
    `
## Usage

${data.Instructions}
    `
};
if (data.Contribution) {
    markdownTemplate +=
    `

## Contribution

${data.Contribution}
    `
};

if (data.testing) {
    markdownTemplate +=
      `
      
## Testing

${data.testing}
    `
};

markdownTemplate +=
      `
      
## Questions
      
  _For further questions:_
  ${data.questions}
  
  _Contact Info:_
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})`;
  
  markdownTemplate +=
    `
    
## License
      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseLink})
  
  `;
  return markdownTemplate;







module.exports = generateMarkdown;